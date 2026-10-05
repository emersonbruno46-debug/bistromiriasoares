import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import styles from './Flavors.module.css';

export const Flavors: React.FC = () => {
  const { flavors, brand } = SITE_CONTENT;

  return (
    <section id={flavors.id} className={`section-padding ${styles.flavors}`} aria-labelledby="flavors-heading">
      <div className="container">
        {/* Centered Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>{flavors.eyebrow}</div>
          <h2 id="flavors-heading" className={styles.title}>
            {flavors.h2}
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className={styles.grid}>
          {/* Vitrine Image */}
          <div className={styles.vitrineWrapper}>
            <img
              src={flavors.vitrineImage.src}
              alt={flavors.vitrineImage.alt}
              className={styles.vitrineImage}
              loading="lazy"
            />
          </div>

          {/* Double Vinho Menu Frame */}
          <div>
            <div className={styles.menuCard}>
              <div className={styles.menuInnerFrame}>
                {flavors.categories.map((cat, idx) => (
                  <React.Fragment key={cat}>
                    <div className={styles.menuItem}>{cat}</div>
                    {idx < flavors.categories.length - 1 && (
                      <div className={styles.diamondDivider} aria-hidden="true">
                        ❖
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Actions below menu frame */}
            <div className={styles.actions}>
              <p className={styles.note}>{flavors.note}</p>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary ${styles.exploreBtn}`}
              >
                <span>{flavors.cta}</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
