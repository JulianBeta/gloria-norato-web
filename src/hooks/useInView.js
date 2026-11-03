import { useEffect, useRef, useState } from 'react';

/** True once the element has scrolled into view (stays true). Used for reveal animations and lazy work. */
export function useInView(options = { rootMargin: '0px 0px -10% 0px' }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (!('IntersectionObserver' in window)) return setInView(true);
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && setInView(true), options);
    io.observe(el);
    return () => io.disconnect();
  }, [inView, options]);
  return [ref, inView];
}
