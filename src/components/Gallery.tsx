import React, { useState } from 'react';
import { SITE_CONTENT } from '../data/content';
import { Lightbox } from './Lightbox';
import styles from './Gallery.module.css';

export const Gallery: React.FC = () => {
  const { space } = SITE_CONTENT;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <section id={space.id} className={`section-padding ${styles.gallerySection}`} aria-labelledby="space-heading">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <h2 id="space-heading" className={styles.title}>
            {space.h2}
          </h2>
          <p className={styles.subtitle}>{space.text}</p>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className={styles.grid}>
          {space.gallery.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              className={styles.itemCard}
              onClick={() => handleOpenLightbox(idx)}
              aria-label={`Ampliar imagem: ${item.caption}`}
            >
              <div className={styles.imageFrame}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.accentLine} aria-hidden="true" />
                <span className={styles.caption}>{item.caption}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={space.gallery}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </section>
  );
};
