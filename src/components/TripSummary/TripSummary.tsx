import type { Day, TripMeta } from '../../types/trip';
import styles from './TripSummary.module.css';

interface TripSummaryProps {
  meta: TripMeta;
  days: Day[];
}

export function TripSummary({ meta, days }: TripSummaryProps) {
  return (
    <aside className={styles.panel}>
      <div className={styles.header}>
        <div className={styles.title}>{meta.title}</div>
        <div className={styles.subtitle}>{meta.subtitle}</div>
        <div className={styles.route}>{meta.route}</div>
      </div>

      <div className={styles.hint}>
        <i className="ti ti-hand-click" aria-hidden />
        <div>
          <div className={styles.hintTitle}>Как пользоваться</div>
          <div className={styles.hintText}>Выберите любую остановку в списке слева — здесь появится подробное описание, фото и карта</div>
        </div>
      </div>

      <div className={styles.days}>
        {days.map((day) => (
          <div key={day.date} className={styles.day}>
            <div className={styles.dayHeader}>
              <span className={styles.dayEmoji} aria-hidden>{day.emoji}</span>
              <div>
                <div className={styles.dayTitle}>{day.date} — {day.title}</div>
                <div className={styles.daySub}>{day.sub}</div>
              </div>
            </div>
            {day.summary && day.summary.length > 0 && (
              <div className={styles.summary}>
                {day.summary.map((line, i) => (
                  <div key={i} className={styles.summaryLine}>
                    <span className={styles.summaryIcon}>{line.icon}</span>
                    <span>{line.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.totals}>
        <div className={styles.totalsTitle}>Итого по поездке</div>
        <div className={styles.totalsGrid}>
          <div className={styles.totalItem}>
            <span className={styles.totalIcon}>📅</span>
            <span>5 дней</span>
          </div>
          <div className={styles.totalItem}>
            <span className={styles.totalIcon}>👨‍👩‍👧‍👦</span>
            <span>16 человек</span>
          </div>
          <div className={styles.totalItem}>
            <span className={styles.totalIcon}>📏</span>
            <span>~1480 км</span>
          </div>
          <div className={styles.totalItem}>
            <span className={styles.totalIcon}>⏱</span>
            <span>~18.5 часов за рулём</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
