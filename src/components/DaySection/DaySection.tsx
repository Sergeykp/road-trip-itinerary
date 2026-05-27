import type { Day, SelectedStop } from '../../types/trip';
import { StopRow } from '../StopRow/StopRow';
import styles from './DaySection.module.css';

interface DaySectionProps {
  day: Day;
  dayIndex: number;
  isOpen: boolean;
  selectedStop: SelectedStop | null;
  onToggle: () => void;
  onSelectStop: (stopIndex: number) => void;
}

export function DaySection({
  day,
  dayIndex,
  isOpen,
  selectedStop,
  onToggle,
  onSelectStop,
}: DaySectionProps) {
  return (
    <section>
      <button type="button" className={styles.label} onClick={onToggle}>
        <div className={styles.text}>
          <strong>
            {day.date} — {day.title}
          </strong>
        </div>
        <i className={`ti ti-chevron-down ${styles.chev} ${isOpen ? styles.chevOpen : ''}`} aria-hidden />
      </button>
      {isOpen && (
        <div className={styles.stopList}>
          {day.stops.map((stop, stopIndex) => (
            <StopRow
              key={`${day.date}-${stop.name}`}
              stop={stop}
              dotColor={day.dot}
              isActive={
                selectedStop?.dayIndex === dayIndex && selectedStop.stopIndex === stopIndex
              }
              onSelect={() => onSelectStop(stopIndex)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
