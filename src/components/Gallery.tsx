import React, { useLayoutEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Lightbox } from './Lightbox';
import { SplitWords } from './Reveal';
import styles from './Gallery.module.css';

export const Gallery: React.FC = () => {
  const { space } = SITE_CONTENT;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const reduce = !!useReducedMotion();
  const wide = useMediaQuery('(min-width: 900px)');
  const pinned = wide && !reduce;

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  useLayoutEffect(() => {
    if (!pinned) return;
    const measure = () => {
      const t = trackRef.current;
      if (t) setDist(Math.max(0, t.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [pinned]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end end'] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);

  const intro = (
    <div className={styles.intro}>
      <h2 id="space-heading" className={styles.title}>
        <SplitWords text={space.h2} />
      </h2>
      <p className={styles.hint}>
        {pinned ? 'Role para conhecer' : 'Deslize para conhecer'} <MoveRight size={18} />
      </p>
    </div>
  );

  const cards = space.gallery.map((item, idx) => (
    <button
      key={item.id}
      type="button"
      className={`${styles.card} ${item.tall ? styles.cardTall : styles.cardWide}`}
      onClick={() => setLightboxIndex(idx)}
      aria-label={`Ampliar imagem: ${item.caption}`}
    >
      <img src={item.src} alt={item.alt} loading="lazy" draggable={false} />
      <span className={styles.caption}>{item.caption}</span>
    </button>
  ));

  return (
    <section
      id={space.id}
      ref={sectionRef}
      className={`${styles.section} ${pinned ? '' : styles.simple}`}
      style={pinned ? { height: `calc(100vh + ${dist}px)` } : undefined}
      aria-labelledby="space-heading"
    >
      {pinned ? (
        <div className={styles.pin}>
          <motion.div className={styles.track} style={{ x }} ref={trackRef}>
            {intro}
            {cards}
            <span className={styles.end} aria-hidden="true" />
          </motion.div>
        </div>
      ) : (
        <>
          {intro}
          <div className={styles.track}>{cards}</div>
        </>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          items={space.gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}
    </section>
  );
};
