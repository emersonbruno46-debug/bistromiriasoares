import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import styles from './Flavors.module.css';

export const Flavors: React.FC = () => {
  const { flavors, brand } = SITE_CONTENT;

  return (
    <section id={flavors.id} className={`section-padding ${styles.flavors}`} aria-labelledby="flavors-heading">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={`eyebrow ${styles.eyebrow}`}>{flavors.eyebrow}</div>
          <h2 id="flavors-heading" className={styles.title}>
            {flavors.h2}
          </h2>
        </div>

        {/* Content Grid */}
        <div className={styles.grid}>
          {/* Vitrine Image Column */}
          <div className={styles.vitrineWrapper}>
            <picture>
              <source media="(min-width: 768px)" srcSet={flavors.vitrineImage.desktop} />
              <img
                src={flavors.vitrineImage.mobile}
                alt={flavors.vitrineImage.alt}
                className={styles.vitrineImage}
                loading="lazy"
              />
            </picture>
          </div>

          {/* List Column */}
          <div className={styles.listWrapper}>
            <ul className={styles.itemsList}>
              {flavors.items.map((item) => (
                <li key={item.number} className={styles.item}>
                  <span className={styles.number}>{item.number}</span>
                  <div className={styles.itemContent}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.footerActions}>
              <p className={styles.note}>{flavors.note}</p>
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-outline-dark ${styles.exploreBtn}`}
              >
                <span>{flavors.cta}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
