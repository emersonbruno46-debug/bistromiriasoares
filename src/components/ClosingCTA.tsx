import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import styles from './ClosingCTA.module.css';

export const ClosingCTA: React.FC = () => {
  const { closing, brand } = SITE_CONTENT;

  return (
    <section className={styles.closingSection} aria-label="Encerramento e Convite">
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>{closing.title}</h2>
          <p className={styles.description}>{closing.text}</p>
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-creme ${styles.ctaBtn}`}
          >
            <span>{closing.cta}</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
