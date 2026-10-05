import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/content';
import styles from './Lightbox.module.css';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const currentItem = items[currentIndex];
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Focus close button on mount for accessibility
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (!currentItem) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true" aria-label="Visualização de Imagem Ampliada">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button
          ref={closeBtnRef}
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Fechar galeria"
        >
          <X size={24} />
        </button>

        {/* Previous button */}
        <button
          type="button"
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
          aria-label="Imagem anterior"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Image Display */}
        <div className={styles.imageContainer}>
          <img
            src={currentItem.src}
            alt={currentItem.alt}
            className={styles.modalImage}
          />
        </div>

        {/* Next button */}
        <button
          type="button"
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={() => onNavigate((currentIndex + 1) % items.length)}
          aria-label="Próxima imagem"
        >
          <ChevronRight size={28} />
        </button>

        {/* Caption & Counter */}
        <div className={styles.captionBar}>
          <span className={styles.captionText}>{currentItem.caption}</span>
          <span className={styles.counter}>
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
};
