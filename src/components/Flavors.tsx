import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import { EASE, Reveal, SplitWords } from './Reveal';
import styles from './Flavors.module.css';

export const Flavors: React.FC = () => {
  const { flavors, brand } = SITE_CONTENT;
  const reduce = useReducedMotion();
  const mediaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: mediaRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '4%']);

  return (
    <section id={flavors.id} className={styles.section} aria-labelledby="flavors-heading">
      <div className={`container ${styles.grid}`}>
        <motion.div
          ref={mediaRef}
          className={styles.media}
          initial={reduce ? false : { clipPath: 'inset(100% 0 0 0)' }}
          whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
          viewport={{ once: true, margin: '0px 0px -10% 0px' }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <motion.img
            src={flavors.vitrineImage.src}
            alt={flavors.vitrineImage.alt}
            loading="lazy"
            style={{ y: reduce ? 0 : y }}
          />
        </motion.div>

        <div>
          <div className={styles.head}>
            <p className={`eyebrow ${styles.eyebrow}`}>{flavors.eyebrow}</p>
            <h2 id="flavors-heading" className={styles.title}>
              <SplitWords text={flavors.h2} />
            </h2>
          </div>

          <ul className={styles.list}>
            {flavors.categories.map((c, i) => (
              <li key={c} className={styles.row}>
                <Reveal delay={i * 0.08} y={20}>
                  <a
                    href={brand.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    aria-label={`${c} — ver no Instagram`}
                  >
                    <span>{c}</span>
                    <span className={styles.arrow} aria-hidden="true">
                      <ArrowUpRight size={22} />
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className={styles.foot}>
            <p className={styles.note}>{flavors.note}</p>
            <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-vinho">
              {flavors.cta} <ArrowUpRight size={18} />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
