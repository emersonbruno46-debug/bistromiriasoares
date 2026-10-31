import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import { useOpenStatus } from '../hooks/useOpenStatus';
import { EASE } from './Reveal';

/** Barra fixa no celular: estado da casa + Como chegar. */
export const MobileBar: React.FC = () => {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();
  const status = useOpenStatus();

  useEffect(() => scrollY.on('change', (y) => setShow(y > window.innerHeight * 0.9)), [scrollY]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="mobile-bar"
          initial={{ y: '120%' }}
          animate={{ y: 0 }}
          exit={{ y: '120%' }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <span className="mobile-bar__status">
            <i className={status.isOpen ? 'on' : ''} aria-hidden="true" />
            {status.label}
          </span>
          <a href={SITE_CONTENT.brand.mapsUrl} target="_blank" rel="noopener noreferrer" className="mobile-bar__btn">
            Como chegar <ArrowUpRight size={16} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
