// Streaming client for /api/chat.php (Anthropic Messages API SSE passthrough).
// Parses Anthropic's stream events and yields plain text deltas.

const ENDPOINT = '/api/chat.php';

export async function streamChat(messages, { onDelta, onDone, onError, signal } = {}) {
  let res;
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
      signal,
    });
  } catch (e) {
    onError?.(e);
    return;
  }

  if (!res.ok || !res.body) {
    let detail = '';
    try {
      detail = await res.text();
    } catch {
      // ignore parse error
    }
    onError?.(new Error(`Chat endpoint ${res.status}: ${detail.slice(0, 200) || 'no body'}`));
    return;
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buf = '';

  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      let idx;
      while ((idx = buf.indexOf('\n\n')) !== -1) {
        const block = buf.slice(0, idx);
        buf = buf.slice(idx + 2);
        const lines = block.split('\n');
        let event = '';
        let data = '';
        for (const line of lines) {
          if (line.startsWith('event:')) event = line.slice(6).trim();
          else if (line.startsWith('data:')) data += line.slice(5).trim();
        }
        if (!data) continue;
        if (data === '[DONE]') {
          onDone?.();
          return;
        }
        try {
          const obj = JSON.parse(data);
          if (event === 'error' || obj.type === 'error') {
            onError?.(new Error(obj.error?.message || obj.error || 'Stream error'));
            return;
          }
          if (obj.type === 'content_block_delta' && obj.delta?.type === 'text_delta') {
            onDelta?.(obj.delta.text);
          } else if (obj.type === 'message_stop') {
            onDone?.();
            return;
          }
        } catch {
          // ignore non-JSON keepalives
        }
      }
    }
    onDone?.();
  } catch (e) {
    if (e?.name === 'AbortError') return;
    onError?.(e);
  }
}
