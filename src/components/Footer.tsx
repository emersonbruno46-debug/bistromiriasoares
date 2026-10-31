import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SITE_CONTENT } from '../data/content';
import { Logo } from './Logo';
import { Reveal } from './Reveal';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { brand, nav, footer } = SITE_CONTENT;

  return (
    <footer className={styles.footer} aria-label="Rodapé">
      <div className="container">
        <div className={styles.top}>
          <Reveal>
            <Logo className={styles.logo} />
          </Reveal>
          <nav className={styles.links} aria-label="Rodapé">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>{n.label}</a>
            ))}
            <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer">{brand.instagramHandle}</a>
            <a href="#inicio">Voltar ao topo <ArrowUp size={16} /></a>
          </nav>
        </div>
        <div className={styles.bottom}>
          <span>{brand.address} · {brand.fullLocation}</span>
          <span>{footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
};
