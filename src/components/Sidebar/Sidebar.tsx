import type { Day, SelectedStop, TripMeta } from '../../types/trip';
import { DaySection } from '../DaySection/DaySection';
import { TripHeader } from '../TripHeader/TripHeader';
import styles from './Sidebar.module.css';

interface SidebarProps {
  meta: TripMeta;
  days: Day[];
  openDays: Set<number>;
  selectedStop: SelectedStop | null;
  detailOpen: boolean;
  onToggleDay: (dayIndex: number) => void;
  onSelectStop: (dayIndex: number, stopIndex: number) => void;
}

export function Sidebar({
  meta,
  days,
  openDays,
  selectedStop,
  detailOpen,
  onToggleDay,
  onSelectStop,
}: SidebarProps) {
  return (
    <div className={`${styles.sidebar} ${detailOpen ? styles.withDetail : ''}`}>
      <TripHeader meta={meta} />
      <div className={styles.days}>
        {days.map((day, dayIndex) => (
          <DaySection
            key={day.date}
            day={day}
            dayIndex={dayIndex}
            isOpen={openDays.has(dayIndex)}
            selectedStop={selectedStop}
            onToggle={() => onToggleDay(dayIndex)}
            onSelectStop={(stopIndex) => onSelectStop(dayIndex, stopIndex)}
          />
        ))}
      </div>
    </div>
  );
}
