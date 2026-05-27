import { FALLBACK_IMG } from '../../constants';
import styles from './Gallery.module.css';

interface GalleryProps {
  images: string[];
  alt: string;
  onImageClick: (src: string) => void;
}

export function Gallery({ images, alt, onImageClick }: GalleryProps) {
  return (
    <div className={styles.gallery}>
      {images.map((url) => (
        <button
          key={url}
          type="button"
          className={styles.thumbButton}
          onClick={() => onImageClick(url)}
        >
          <img
            src={url}
            alt={alt}
            loading="lazy"
            className={styles.thumb}
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMG;
            }}
          />
        </button>
      ))}
    </div>
  );
}
