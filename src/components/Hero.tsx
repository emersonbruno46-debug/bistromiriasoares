import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import { useOpenStatus } from '../hooks/useOpenStatus';
import { EASE, SplitWords } from './Reveal';
import styles from './Hero.module.css';

const Marquee: React.FC = () => {
  const items = SITE_CONTENT.flavors.categories;
  const row = (
    <div className={styles.item} aria-hidden="true">
      {items.map((c) => (
        <React.Fragment key={c}>
          <span>{c}</span>
          <span className={styles.sep} />
        </React.Fragment>
      ))}
    </div>
  );
  return (
    <div className={styles.marquee} aria-label={items.join(', ')} role="group">
      <div className={styles.track}>
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const { hero, brand } = SITE_CONTENT;
  const status = useOpenStatus();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '-9%']);
  const archY = useTransform(scrollYProgress, [0, 1], ['0px', '-60px']);

  return (
    <section className={styles.hero} id="inicio-hero" ref={ref}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <motion.div
            className={styles.status}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          >
            <span className={`${styles.dot} ${status.isOpen ? '' : styles.dotClosed}`} aria-hidden="true" />
            <span>{status.label}</span>
          </motion.div>

          <span className={`eyebrow ${styles.eyebrow}`}>
            <SplitWords text={hero.eyebrow} onLoad delay={0.15} />
          </span>

          <h1 className={styles.title} aria-label={hero.h1}>
            <span aria-hidden="true">
              <SplitWords text={hero.h1} onLoad delay={0.25} italicFrom={3} />
            </span>
          </h1>

          <motion.p
            className={styles.description}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1 }}
          >
            <a href="#sabores" className="btn btn-creme">
              {hero.primaryCta} <ArrowDown size={18} />
            </a>
            <a href={brand.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-creme">
              {hero.secondaryCta} <ArrowUpRight size={18} />
            </a>
          </motion.div>

          <motion.p
            className={styles.location}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {hero.bottomLocation}
          </motion.p>
        </div>

        <motion.div className={styles.archWrap} style={{ y: reduce ? 0 : archY }}>
          <motion.div
            className={styles.ring}
            initial={reduce ? false : { opacity: 0, scaleY: 0.9 }}
            animate={{ opacity: 1, scaleY: 1 }}
            style={{ transformOrigin: 'bottom' }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.5 }}
          />
          <motion.div
            className={styles.arch}
            initial={reduce ? false : { clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 1.5, ease: EASE, delay: 0.2 }}
          >
            <motion.img
              src={hero.image.src}
              alt={hero.image.alt}
              className={styles.archImg}
              style={{ y: reduce ? 0 : imgY }}
              initial={reduce ? false : { scale: 1.35 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: EASE, delay: 0.2 }}
            />
          </motion.div>
          <a href="#sabores" className={styles.badge} aria-label="Ver sabores">
            <svg className={styles.badgeSvg} viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path id="circ" d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0" />
              </defs>
              <text>
                <textPath href="#circ">TAIOBEIRAS · MINAS GERAIS · BISTRÔ ·</textPath>
              </text>
            </svg>
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>

      <Marquee />
    </section>
  );
};
