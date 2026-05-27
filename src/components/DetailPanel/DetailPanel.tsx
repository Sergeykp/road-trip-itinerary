import { useEffect, useRef } from 'react';
import type { Day, Stop } from '../../types/trip';
import { getMapsEmbedUrl, getMapsSearchUrl } from '../../utils/maps';
import { Gallery } from '../Gallery/Gallery';
import { StopDescription } from '../StopDescription/StopDescription';
import { StopInfo } from '../StopInfo/StopInfo';
import { StopLinks } from '../StopLinks/StopLinks';
import { StopTips } from '../StopTips/StopTips';
import styles from './DetailPanel.module.css';

interface DetailPanelProps {
  day: Day;
  stop: Stop;
  onClose: () => void;
  onImageClick: (src: string) => void;
}

export function DetailPanel({ day, stop, onClose, onImageClick }: DetailPanelProps) {
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    panelRef.current?.scrollTo(0, 0);
  }, [day.date, stop.name]);

  const mapsUrl = getMapsSearchUrl(stop.q);
  const embedUrl = getMapsEmbedUrl(stop.q);

  return (
    <aside ref={panelRef} className={styles.panel}>
      <button type="button" className={styles.close} onClick={onClose} aria-label="Закрыть">
        <span aria-hidden>×</span>
      </button>

      <div className={styles.placeTile}>
        <div className={styles.topRow}>
          <div className={styles.emoji} aria-hidden>
            {stop.icon}
          </div>
          <div>
            <div className={styles.title}>{stop.name}</div>
            <div className={styles.subtitle}>{stop.nameRu}</div>
            <div className={styles.time}>
              {day.date} · {stop.time}
            </div>
          </div>
        </div>
      </div>

      <Gallery images={stop.imgs} alt={stop.name} onImageClick={onImageClick} />

      <div className={styles.info}>
        <StopDescription html={stop.desc} />
        <StopLinks links={stop.links} />
        <StopTips tips={stop.tips} />
        <StopInfo info={stop.info} />
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={styles.mapBtn}>
          <i className="ti ti-map-pin" aria-hidden />
          Открыть в Google Maps
        </a>
        <div className={styles.mapEmbed}>
          <iframe src={embedUrl} loading="lazy" title={stop.name} />
        </div>
      </div>
    </aside>
  );
}
