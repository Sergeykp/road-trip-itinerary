import type { StopInfo as StopInfoItem } from '../../types/trip';
import styles from './StopInfo.module.css';

interface StopInfoProps {
  info?: StopInfoItem[];
}

export function StopInfo({ info }: StopInfoProps) {
  if (!info?.length) return null;

  return (
    <>
      {info.map((row) => (
        <div key={`${row.icon}-${row.text}`} className={styles.row}>
          <i className={`ti ${row.icon}`} aria-hidden />
          <span>{row.text}</span>
        </div>
      ))}
    </>
  );
}
