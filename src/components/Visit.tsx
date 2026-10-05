import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import styles from './Visit.module.css';

export const Visit: React.FC = () => {
  const { visit, brand } = SITE_CONTENT;

  return (
    <section id={visit.id} className={`section-padding ${styles.visitSection}`} aria-labelledby="visit-heading">
      <div className="container">
        <div className={styles.grid}>
          {/* Entrance Door Image Column */}
          <div className={styles.imageWrapper}>
            <img
              src={visit.image.src}
              alt={visit.image.alt}
              className={styles.image}
              loading="lazy"
            />
          </div>

          {/* Location & Schedule Info Column */}
          <div className={styles.infoContent}>
            <div className={`eyebrow ${styles.eyebrow}`}>{visit.eyebrow}</div>
            <h2 id="visit-heading" className={styles.title}>
              {visit.h2}
            </h2>
            <p className={styles.address}>{brand.address}</p>

            {/* Schedule Table */}
            <table className={styles.scheduleTable} aria-label="Horário de Funcionamento">
              <tbody>
                {visit.hours.map((row) => (
                  <tr key={row.days} className={styles.scheduleRow}>
                    <td className={styles.scheduleDay}>{row.days}</td>
                    <td className={styles.scheduleHours}>{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Actions */}
            <div className={styles.actions}>
              <a
                href={brand.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary ${styles.mapsBtn}`}
              >
                <span>{visit.primaryCta}</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-blue"
              >
                <span>{visit.secondaryCta}</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
