<?php
// public/api/chat.php
// Hostinger-friendly proxy from the site to the Anthropic Messages API.
// Streams Server-Sent Events back to the browser.
//
// REQUIRED ENVIRONMENT VARIABLE:
//   ANTHROPIC_API_KEY  — set in hPanel → Advanced → Environment variables,
//                        OR via .htaccess `SetEnv ANTHROPIC_API_KEY ...`
//                        OR put it in /home/<user>/secrets.php and require it here.

header('Content-Type: text/event-stream; charset=utf-8');
header('Cache-Control: no-cache, no-transform');
header('X-Accel-Buffering: no');
header('Connection: keep-alive');
@ob_end_clean();
@ini_set('zlib.output_compression', 'Off');
if (function_exists('apache_setenv')) { @apache_setenv('no-gzip', '1'); }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo "event: error\ndata: " . json_encode(['error' => 'POST only']) . "\n\n";
  exit;
}

$apiKey = getenv('ANTHROPIC_API_KEY');
if (!$apiKey) {
  // Optional fallback: a secrets file outside webroot.
  $secrets = __DIR__ . '/../../secrets.php';
  if (file_exists($secrets)) { @include $secrets; $apiKey = $apiKey ?? null; }
}
if (!$apiKey) {
  echo "event: error\ndata: " . json_encode(['error' => 'Server is missing ANTHROPIC_API_KEY']) . "\n\n";
  exit;
}

$raw = file_get_contents('php://input');
$body = json_decode($raw, true);
if (!is_array($body) || !isset($body['messages']) || !is_array($body['messages'])) {
  http_response_code(400);
  echo "event: error\ndata: " . json_encode(['error' => 'Invalid body. Expect { messages: [...] }']) . "\n\n";
  exit;
}

// Light validation/cap on conversation length to control costs.
$messages = array_slice($body['messages'], -20);
foreach ($messages as &$m) {
  if (!isset($m['role'], $m['content'])) {
    http_response_code(400);
    echo "event: error\ndata: " . json_encode(['error' => 'Each message needs role + content']) . "\n\n";
    exit;
  }
  $m['role'] = $m['role'] === 'assistant' ? 'assistant' : 'user';
  if (is_string($m['content'])) {
    $m['content'] = substr($m['content'], 0, 4000);
  }
}
unset($m);

$knowledgePath = __DIR__ . '/../../src/data/knowledge.md';
// On the server, knowledge.md is shipped INSIDE the static `dist/` (we copy it during build).
// Try multiple paths so this works in dev and after deploy.
$candidates = [
  __DIR__ . '/../knowledge.md',                 // public_html/knowledge.md
  __DIR__ . '/../../src/data/knowledge.md',    // dev / repo-root
  $knowledgePath,
];
$knowledge = '';
foreach ($candidates as $p) {
  if (is_readable($p)) { $knowledge = file_get_contents($p); break; }
}

$systemText =
  "You are Finlec AI, the assistant on finlectechnologies.com.\n\n" .
  "Personality: friendly, direct, confident, never salesy. Speak in short paragraphs. Use markdown when it helps (lists, **bold** for emphasis).\n\n" .
  "Scope rules:\n" .
  "1. Only answer questions about Finlec Technologies, our services, products, process, team, blog, or how to engage us.\n" .
  "2. If asked something unrelated (general coding help, news, translations, math, jokes, etc.), politely decline in one sentence and steer back to what we do or suggest the contact page.\n" .
  "3. Never invent prices, timelines, team names, or commitments. For specifics, point to the contact form at /contact or WhatsApp on the floating button.\n" .
  "4. When asked 'how to get started' or showing buying intent, encourage submitting a brief at /contact (mention the 48-hour reply promise).\n" .
  "5. Cite our own copy when possible. If the knowledge base doesn't cover a question, say so and offer to connect them with the team.\n\n" .
  "Knowledge base (the only source of truth):\n\n---\n\n" . $knowledge;

$payload = [
  'model' => 'claude-haiku-4-5',
  'max_tokens' => 1024,
  'stream' => true,
  'system' => [[
    'type' => 'text',
    'text' => $systemText,
    'cache_control' => ['type' => 'ephemeral'],
  ]],
  'messages' => $messages,
];

$ch = curl_init('https://api.anthropic.com/v1/messages');
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_POSTFIELDS => json_encode($payload),
  CURLOPT_HTTPHEADER => [
    'Content-Type: application/json',
    'x-api-key: ' . $apiKey,
    'anthropic-version: 2023-06-01',
  ],
  CURLOPT_RETURNTRANSFER => false,
  CURLOPT_HEADER => false,
  CURLOPT_WRITEFUNCTION => function ($ch, $chunk) {
    echo $chunk;
    @ob_flush();
    @flush();
    return strlen($chunk);
  },
  CURLOPT_TIMEOUT => 120,
]);
$ok = curl_exec($ch);
if ($ok === false) {
  $err = curl_error($ch);
  echo "event: error\ndata: " . json_encode(['error' => 'Upstream error: ' . $err]) . "\n\n";
}
curl_close($ch);
