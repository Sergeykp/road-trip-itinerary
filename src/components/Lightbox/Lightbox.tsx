import styles from './Lightbox.module.css';

interface LightboxProps {
  src: string | null;
  onClose: () => void;
}

export function Lightbox({ src, onClose }: LightboxProps) {
  if (!src) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal
      onClick={onClose}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
    >
      <button
        type="button"
        className={styles.close}
        aria-label="Закрыть"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <span aria-hidden>×</span>
      </button>
      <img src={src} alt="" className={styles.image} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
