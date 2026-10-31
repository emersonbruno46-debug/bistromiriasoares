import React from 'react';
import { SITE_CONTENT } from '../data/content';

interface LogoProps {
  className?: string;
  color?: string;
}

/** Logo SVG original, recolorida via máscara (vinho no creme, creme no vinho). */
export const Logo: React.FC<LogoProps> = ({ className, color = 'currentColor' }) => (
  <span
    role="img"
    aria-label={SITE_CONTENT.brand.name}
    className={className}
    style={{
      display: 'block',
      aspectRatio: '6 / 5',
      backgroundColor: color,
      WebkitMaskImage: `url(${SITE_CONTENT.brand.logoSvg})`,
      maskImage: `url(${SITE_CONTENT.brand.logoSvg})`,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
    }}
  />
);
