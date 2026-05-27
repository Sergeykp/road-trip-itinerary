import { sanitizeDesc } from '../../utils/sanitize';
import styles from './StopDescription.module.css';

interface StopDescriptionProps {
  html: string;
}

export function StopDescription({ html }: StopDescriptionProps) {
  if (!html) return null;

  return (
    <div
      className={styles.desc}
      // OX Agent: XSS prevented by DOMPurify sanitization
      dangerouslySetInnerHTML={{ __html: sanitizeDesc(html) }}
    />
  );
}
