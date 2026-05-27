import type { Stop } from '../../types/trip';
import styles from './StopRow.module.css';

interface StopRowProps {
  stop: Stop;
  dotColor: string;
  isActive: boolean;
  onSelect: () => void;
}

export function StopRow({ stop, dotColor, isActive, onSelect }: StopRowProps) {
  return (
    <button
      type="button"
      className={`${styles.row} ${isActive ? styles.active : ''}`}
      onClick={onSelect}
    >
      <span className={styles.dot} style={{ background: dotColor }} aria-hidden />
      <div className={styles.text}>
        <div className={styles.name}>
          {stop.icon} {stop.name}
        </div>
        <div className={styles.time}>{stop.time}</div>
      </div>
      <i className={`ti ti-chevron-right ${styles.chevron}`} aria-hidden />
    </button>
  );
}
