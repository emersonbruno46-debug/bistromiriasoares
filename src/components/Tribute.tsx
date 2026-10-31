import React, { useRef } from 'react';
import { motion, MotionValue, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { SITE_CONTENT } from '../data/content';
import { SplitWords } from './Reveal';
import styles from './Tribute.module.css';

interface WordProps {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
  reduce: boolean;
}

/** Palavra que “acende” conforme a rolagem. */
const Word: React.FC<WordProps> = ({ word, range, progress, reduce }) => {
  const opacity = useTransform(progress, range, [0.22, 1]);
  return (
    <motion.span className={styles.word} style={{ opacity: reduce ? 1 : opacity }}>
      {word}
    </motion.span>
  );
};

export const Tribute: React.FC = () => {
  const { tribute } = SITE_CONTENT;
  const reduce = !!useReducedMotion();
  const textRef = useRef<HTMLParagraphElement>(null);
  const imgWrap = useRef<HTMLDivElement>(null);

  const { scrollYProgress: textProgress } = useScroll({ target: textRef, offset: ['start 0.85', 'end 0.55'] });
  const { scrollYProgress: imgProgress } = useScroll({ target: imgWrap, offset: ['start end', 'end start'] });
  const scale = useTransform(imgProgress, [0, 0.5], [0.86, 1]);
  const imgY = useTransform(imgProgress, [0, 1], ['-9%', '3%']);

  const words = tribute.text.split(' ');

  return (
    <section id={tribute.id} className={styles.section} aria-labelledby="tribute-heading">
      <div className="container">
        <h2 id="tribute-heading" className={styles.title}>
          <SplitWords text={tribute.h2} />
        </h2>
        <p className={styles.statement} ref={textRef}>
          {words.map((w, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return <Word key={i} word={w} range={[start, Math.min(1, end + 0.08)]} progress={textProgress} reduce={reduce} />;
          })}
        </p>
      </div>

      <div className={styles.imageWrap} ref={imgWrap}>
        <motion.div className={styles.frame} style={{ scale: reduce ? 1 : scale, transformOrigin: 'bottom center' }}>
          <motion.img
            src={tribute.image.src}
            alt={tribute.image.alt}
            loading="lazy"
            style={{ y: reduce ? 0 : imgY }}
          />
        </motion.div>
      </div>
    </section>
  );
};
