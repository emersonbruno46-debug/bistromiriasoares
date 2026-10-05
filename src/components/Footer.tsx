import React from 'react';
import { SITE_CONTENT } from '../data/content';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { brand } = SITE_CONTENT;

  return (
    <footer className={styles.footer} aria-label="Rodapé">
      <div className={`container ${styles.inner}`}>
        <img
          src={brand.logoSvg}
          alt={brand.name}
          className={styles.logo}
        />
        <div className={styles.location}>{brand.fullLocation}</div>
      </div>
    </footer>
  );
};
