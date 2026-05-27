import styles from './StopTips.module.css';

interface StopTipsProps {
  tips?: string[];
}

export function StopTips({ tips }: StopTipsProps) {
  if (!tips?.length) return null;

  return (
    <div className={styles.tips}>
      <div className={styles.label}>Полезно знать</div>
      <ul>
        {tips.map((tip) => (
          <li key={tip}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}
