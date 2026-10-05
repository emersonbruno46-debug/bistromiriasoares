import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        {/* Brand SVG Logo */}
        <a href="#" className={styles.logoLink} aria-label={SITE_CONTENT.brand.name}>
          <img
            src={SITE_CONTENT.brand.logoSvg}
            alt={SITE_CONTENT.brand.name}
            className={styles.logo}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className={styles.navDesktop} aria-label="Navegação Principal">
          {SITE_CONTENT.nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className={styles.ctaDesktop}>
          <a
            href={SITE_CONTENT.brand.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>Como chegar</span>
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Abrir menu de navegação"
          aria-expanded={mobileMenuOpen}
        >
          <Menu size={28} />
        </button>

        {/* Mobile Drawer Navigation Overlay */}
        <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.drawerOverlay} onClick={() => setMobileMenuOpen(false)} />
          <div className={styles.drawerContent} role="dialog" aria-modal="true" aria-label="Menu">
            <div className={styles.drawerHeader}>
              <img
                src={SITE_CONTENT.brand.logoSvg}
                alt={SITE_CONTENT.brand.name}
                className={styles.drawerLogo}
              />
              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className={styles.drawerNav}>
              {SITE_CONTENT.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={styles.drawerNavLink}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className={styles.drawerCta}>
              <a
                href={SITE_CONTENT.brand.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={handleLinkClick}
              >
                <span>Como chegar</span>
                <ExternalLink size={16} />
              </a>
              <a
                href={SITE_CONTENT.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark"
                style={{ width: '100%' }}
                onClick={handleLinkClick}
              >
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
