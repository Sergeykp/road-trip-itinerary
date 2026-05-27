import type { TripMeta } from '../../types/trip';
import styles from './TripHeader.module.css';

interface TripHeaderProps {
  meta: TripMeta;
}

export function TripHeader({ meta }: TripHeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        {meta.title}
        <br />
        {meta.route}
      </h1>
      <p className={styles.subtitle}>{meta.subtitle}</p>
    </header>
  );
}
