import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { hero, brand } = SITE_CONTENT;

  return (
    <>
      <section className={styles.hero} aria-label="Abertura Bistrô Miriã Soares">
        {/* Responsive Hero Picture background */}
        <div className={styles.heroBg}>
          <picture className={styles.picture}>
            <source media="(min-width: 768px)" srcSet={hero.images.desktop} />
            <img
              src={hero.images.mobile}
              alt={hero.images.alt}
              className={styles.bgImage}
              loading="eager"
              fetchPriority="high"
            />
          </picture>
          <div className={styles.overlay} />
        </div>

        {/* Hero Text Content Container */}
        <div className={`container ${styles.contentWrapper}`}>
          <div className={styles.content}>
            <div className={styles.heroEyebrow}>{hero.eyebrow}</div>
            <h1 className={styles.heroTitle}>{hero.h1}</h1>
            <p className={styles.heroDescription}>{hero.description}</p>

            <div className={styles.actions}>
              <a href="#espaco" className="btn btn-creme">
                {hero.primaryCta}
              </a>
              <a
                href={brand.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <span>{hero.secondaryCta}</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Discrete Category Line Bar */}
      <div className={styles.categoryBar} aria-label="Especialidades">
        <div className={styles.categoryContent}>
          <div className={styles.barLine} />
          <ul className={styles.categoryList}>
            {hero.categories.map((cat, idx) => (
              <li key={cat} className={styles.categoryItem}>
                <span>{cat}</span>
                {idx < hero.categories.length - 1 && <span className={styles.dot} />}
              </li>
            ))}
          </ul>
          <div className={styles.barLine} />
        </div>
      </div>
    </>
  );
};
