import type { TripLink } from '../../types/trip';
import { isSafeHttpUrl } from '../../utils/url';
import styles from './StopLinks.module.css';

interface StopLinksProps {
  links?: TripLink[];
}

export function StopLinks({ links }: StopLinksProps) {
  const safeLinks = links?.filter((l) => l.label && l.url && isSafeHttpUrl(l.url)) ?? [];
  if (!safeLinks.length) return null;

  return (
    <div className={styles.links}>
      <div className={styles.label}>Ссылки</div>
      <div className={styles.list}>
        {safeLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
