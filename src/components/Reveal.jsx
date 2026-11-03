import { useInView } from '../hooks/useInView';

/** Fades and lifts its children into place the first time they scroll into view. */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag ref={ref} className={`reveal ${inView ? 'is-visible' : ''} ${className}`} style={{ '--delay': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}
