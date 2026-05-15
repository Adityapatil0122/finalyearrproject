import { useEffect, useState } from 'react';

export function useStickyNav(sectionIds) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    // Track intersection ratios for all sections
    const ratioMap = {};
    sectionIds.forEach((id) => (ratioMap[id] = 0));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratioMap[entry.target.id] = entry.intersectionRatio;
        });

        // Pick the section with the highest visible ratio
        let best = sectionIds[0];
        let bestRatio = -1;
        for (const id of sectionIds) {
          if (ratioMap[id] > bestRatio) {
            bestRatio = ratioMap[id];
            best = id;
          }
        }
        setActive(best);
      },
      {
        // Fire at every 1% change for smooth tracking
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        // Shrink top margin to account for sticky header (~112px)
        rootMargin: '-112px 0px 0px 0px',
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
