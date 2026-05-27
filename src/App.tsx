import { useCallback, useState } from 'react';
import tripData from './data/trip.json';
import styles from './App.module.css';
import { DetailPanel } from './components/DetailPanel/DetailPanel';
import { Lightbox } from './components/Lightbox/Lightbox';
import { Sidebar } from './components/Sidebar/Sidebar';
import { TripSummary } from './components/TripSummary/TripSummary';
import { useEscapeKey } from './hooks/useEscapeKey';
import type { SelectedStop, TripData } from './types/trip';

const trip = tripData as TripData;

function App() {
  const [openDays, setOpenDays] = useState<Set<number>>(() => new Set(trip.days.map((_, i) => i)));
  const [selectedStop, setSelectedStop] = useState<SelectedStop | null>(null);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const detailOpen = selectedStop !== null;

  const closeDetail = useCallback(() => {
    setSelectedStop(null);
  }, []);

  useEscapeKey(detailOpen && !lightboxSrc, closeDetail);
  useEscapeKey(!!lightboxSrc, () => setLightboxSrc(null));

  const handleToggleDay = (dayIndex: number) => {
    setOpenDays((prev) => {
      const next = new Set(prev);
      if (next.has(dayIndex)) next.delete(dayIndex);
      else next.add(dayIndex);
      return next;
    });
  };

  const handleSelectStop = (dayIndex: number, stopIndex: number) => {
    setSelectedStop({ dayIndex, stopIndex });
  };

  const activeDay = selectedStop ? trip.days[selectedStop.dayIndex] : null;
  const activeStop = activeDay && selectedStop ? activeDay.stops[selectedStop.stopIndex] : null;

  return (
    <>
      <div className={styles.app}>
        {detailOpen && (
          <button
            type="button"
            className={styles.backdrop}
            aria-label="Закрыть панель"
            onClick={closeDetail}
          />
        )}

        <Sidebar
          meta={trip.meta}
          days={trip.days}
          openDays={openDays}
          selectedStop={selectedStop}
          detailOpen={detailOpen}
          onToggleDay={handleToggleDay}
          onSelectStop={handleSelectStop}
        />

        {detailOpen && activeDay && activeStop ? (
          <DetailPanel
            day={activeDay}
            stop={activeStop}
            onClose={closeDetail}
            onImageClick={setLightboxSrc}
          />
        ) : (
          <TripSummary meta={trip.meta} days={trip.days} />
        )}
      </div>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </>
  );
}

export default App;
