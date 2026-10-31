import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import { useOpenStatus } from '../hooks/useOpenStatus';
import { Reveal, SplitWords } from './Reveal';
import styles from './Visit.module.css';

export const Visit: React.FC = () => {
  const { visit, brand } = SITE_CONTENT;
  const status = useOpenStatus();

  return (
    <section id={visit.id} className={styles.section} aria-labelledby="visit-heading">
      <div className="container">
        <h2 id="visit-heading" className={styles.title}>
          <SplitWords text={visit.h2} />
        </h2>

        <div className={styles.grid}>
          <Reveal>
            <p className={styles.label}>Endereço</p>
            <p className={styles.address}>{visit.address}</p>
            <p className={styles.city}>{visit.city}</p>
            <div className={styles.actions}>
              <a href={brand.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-creme">
                {visit.primaryCta} <ArrowUpRight size={18} />
              </a>
              <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-creme">
                <Instagram size={18} /> {brand.instagramHandle}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <p className={styles.label}>Horários</p>
            <ul className={styles.hours} aria-label="Horário de funcionamento">
              {visit.hours.map((row, i) => {
                const isToday = i === status.todayIndex;
                return (
                  <li key={row.label} className={`${styles.hour} ${isToday ? styles.today : ''}`}>
                    <span className={styles.day}>
                      {row.label}
                      {isToday && <span className={styles.tag}>Hoje</span>}
                    </span>
                    <span className={styles.hoursText}>{row.hours}</span>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
