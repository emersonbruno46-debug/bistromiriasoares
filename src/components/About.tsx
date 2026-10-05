import React from 'react';
import { SITE_CONTENT } from '../data/content';
import styles from './About.module.css';

export const About: React.FC = () => {
  const { about } = SITE_CONTENT;

  return (
    <section id={about.id} className={`section-padding ${styles.about}`} aria-labelledby="about-heading">
      <div className="container">
        <div className={styles.grid}>
          {/* Text Column */}
          <div className={styles.textContent}>
            <h2 id="about-heading" className={styles.title}>
              {about.h2}
            </h2>
            <div className={styles.accentLine} aria-hidden="true" />
            <p className={styles.paragraph}>{about.text}</p>
          </div>

          {/* Photo Column */}
          <div className={styles.imageWrapper}>
            <img
              src={about.image.src}
              alt={about.image.alt}
              className={styles.image}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
