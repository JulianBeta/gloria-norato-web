import { ICONS } from '../lib/icons';

/** Decorative icon: always hidden from assistive tech; the surrounding element carries the label. */
export default function Icon({ name, size = 20, className }) {
  return (
    <svg
      className={['icon', className].filter(Boolean).join(' ')}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  );
}
