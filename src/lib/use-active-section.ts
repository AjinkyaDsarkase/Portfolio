'use client';

import { useEffect, useState } from 'react';

// How far past a section's top edge counts as "having reached" it — roughly the
// sticky navbar height plus a little breathing room.
const SCROLL_OFFSET = 120;

// Tracks which section is currently active, for nav highlighting.
// Uses scroll position rather than IntersectionObserver bands: the last section
// (e.g. Contact) often can't be scrolled far enough to sit inside a narrow
// intersection band, which left the previous section stuck as "active" once the
// page hit the bottom. This walks sections top-down and special-cases page-bottom.
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    let ticking = false;

    const computeActive = () => {
      ticking = false;

      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActiveId(sectionIds[sectionIds.length - 1]);
        return;
      }

      const scrollLine = window.scrollY + SCROLL_OFFSET;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollLine) {
          current = id;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(computeActive);
      }
    };

    computeActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds]);

  return activeId;
}
