import { useEffect, type RefObject } from 'react';

export function useInView(ref: RefObject<HTMLElement | null>, threshold = 0.1) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((child) => {
              child.classList.add('active');
            });
            entry.target.classList.add('active');
          }
        });
      },
      { threshold },
    );

    el.querySelectorAll('.reveal').forEach((child) => observer.observe(child));
    if (el.classList.contains('reveal')) observer.observe(el);

    return () => observer.disconnect();
  }, [ref, threshold]);
}
