import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import { Logo } from './Logo';
import { EASE } from './Reveal';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    let last = 0;
    return scrollY.on('change', (y) => {
      setScrolled(y > 60);
      setHidden(y > 480 && y > last + 2 && !open);
      if (Math.abs(y - last) > 2) last = y;
    });
  }, [scrollY, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const { brand, nav } = SITE_CONTENT;

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${hidden ? styles.hidden : ''}`}>
        <div className={`container ${styles.inner}`}>
          <a href="#inicio" aria-label={`${brand.name} — voltar ao topo`}>
            <Logo className={styles.logo} />
          </a>

          <div className={styles.navGroup}>
            <nav className={styles.navDesktop} aria-label="Navegação principal">
              {nav.map((item) => (
                <a key={item.href} href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href={brand.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-ghost-creme ${styles.cta}`}
            >
              Como chegar <ArrowUpRight size={16} />
            </a>
            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
        <motion.div className={styles.progress} style={{ scaleX: progress }} aria-hidden="true" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.drawer}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className={styles.drawerTop}>
              <Logo className={styles.logo} />
              <button type="button" className={styles.menuButton} onClick={() => setOpen(false)} aria-label="Fechar menu">
                <X size={28} />
              </button>
            </div>
            <nav className={styles.drawerNav} aria-label="Menu">
              {nav.map((item, i) => (
                <a key={item.href} href={item.href} className={styles.drawerLink} onClick={() => setOpen(false)}>
                  <motion.span
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.25 + i * 0.08 }}
                  >
                    {item.label}
                  </motion.span>
                </a>
              ))}
            </nav>
            <div className={styles.drawerFoot}>
              <a
                href={brand.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-creme"
                onClick={() => setOpen(false)}
              >
                Como chegar <ArrowUpRight size={16} />
              </a>
              <p className={styles.drawerSmall}>{brand.address} · {brand.fullLocation}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
