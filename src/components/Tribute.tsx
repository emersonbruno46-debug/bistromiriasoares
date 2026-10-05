import React from 'react';
import { SITE_CONTENT } from '../data/content';
import styles from './Tribute.module.css';

export const Tribute: React.FC = () => {
  const { tribute } = SITE_CONTENT;

  return (
    <section id={tribute.id} className={`section-padding ${styles.tribute}`} aria-labelledby="tribute-heading">
      <div className="container">
        <div className={styles.grid}>
          {/* Room with historical portraits image */}
          <div className={styles.imageWrapper}>
            <img
              src={tribute.image.src}
              alt={tribute.image.alt}
              className={styles.image}
              loading="lazy"
            />
          </div>

          {/* Text Content */}
          <div className={styles.textContent}>
            <h2 id="tribute-heading" className={styles.title}>
              {tribute.h2}
            </h2>
            <div className={styles.diamondDivider} aria-hidden="true">
              ❖
            </div>
            <p className={styles.paragraph}>{tribute.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
