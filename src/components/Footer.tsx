import React from 'react';
import { SITE_CONTENT } from '../data/content';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { brand, footer } = SITE_CONTENT;

  return (
    <footer className={styles.footer} aria-label="Rodapé">
      <div className="container">
        {/* Top Info Row matching reference image 3 */}
        <div className={styles.topRow}>
          <img
            src={brand.logoSvg}
            alt={brand.name}
            className={styles.logo}
          />
          <div className={styles.verticalDivider} aria-hidden="true" />
          <div className={styles.info}>
            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramLink}
            >
              {brand.instagramHandle}
            </a>
            <span className={styles.location}>{brand.city}/{brand.state}</span>
          </div>
        </div>

        {/* Bottom Row */}
        <div className={styles.bottomRow}>
          <span className={styles.copyright}>{footer.copyright}</span>
          <span className={styles.brandSignature}>{brand.name}</span>
        </div>
      </div>
    </footer>
  );
};
