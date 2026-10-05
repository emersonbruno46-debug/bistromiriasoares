import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import styles from './Visit.module.css';

export const Visit: React.FC = () => {
  const { visit, brand } = SITE_CONTENT;

  return (
    <section id={visit.id} className={styles.visitSection} aria-labelledby="visit-heading">
      <div className="container">
        <div className={styles.grid}>
          {/* Col 1: Heading & Address */}
          <div className={styles.locationCol}>
            <h2 id="visit-heading" className={styles.title}>
              {visit.h2}
            </h2>
            <div className={styles.blueLine} aria-hidden="true" />
            <p className={styles.address}>{visit.address}</p>
            <p className={styles.city}>{visit.city}</p>
          </div>

          {/* Col 2: Hours Table */}
          <div className={styles.hoursCol}>
            <div className={styles.hoursEyebrow}>HORÁRIOS</div>
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
          </div>

          {/* Col 3: Actions */}
          <div className={styles.actionsCol}>
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
              className={`btn btn-outline-dark ${styles.instaBtn}`}
            >
              <span>{visit.secondaryCta}</span>
              <ArrowRight size={18} />
            </a>

            <a
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.profileLink}
            >
              <Instagram size={18} />
              <span>{brand.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
