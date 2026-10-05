import React from 'react';
import { SITE_CONTENT } from '../data/content';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { hero, brand } = SITE_CONTENT;

  return (
    <section className={styles.hero} aria-label="Abertura Bistrô Miriã Soares">
      <div className="container">
        <div className={styles.grid}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <div className={styles.eyebrow}>{hero.eyebrow}</div>
            <h1 className={styles.title}>{hero.h1}</h1>
            <p className={styles.description}>{hero.description}</p>

            <div className={styles.actions}>
              <a href="#sabores" className="btn btn-creme">
                {hero.primaryCta}
              </a>
              <a
                href={brand.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkSecondary || 'link-underline-creme'}
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Arch Photo Frame */}
          <div className={styles.archWrapper}>
            <div className={styles.archBorder}>
              <div className={styles.archImageFrame}>
                <img
                  src={hero.image.src}
                  alt={hero.image.alt}
                  className={styles.image}
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Discrete Location Line */}
        <div className={styles.locationBar}>{hero.bottomLocation}</div>
      </div>
    </section>
  );
};
