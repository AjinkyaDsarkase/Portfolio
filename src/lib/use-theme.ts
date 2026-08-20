'use client';

import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

// Reads/writes the `dark` class on <html>, kept in sync with localStorage.
// The initial value matches theme-script.ts so hydration doesn't flash.
export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', next === 'dark');
      localStorage.setItem('theme', next);
      return next;
    });
  }, []);

  return { theme, toggleTheme, mounted };
}
