import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const rootDir = process.cwd();
const publicAssetsDir = path.join(rootDir, 'public', 'assets', 'images');

if (!fs.existsSync(publicAssetsDir)) {
  fs.mkdirSync(publicAssetsDir, { recursive: true });
}

// Copy SVG Logo
const svgSource = path.join(rootDir, 'LOGO BISTRO MIRIA SOARES.svg');
const svgTarget = path.join(publicAssetsDir, 'logo-bistro-miria-soares.svg');
if (fs.existsSync(svgSource)) {
  fs.copyFileSync(svgSource, svgTarget);
  console.log('✓ Copied logo-bistro-miria-soares.svg');
}

// Image mapping from prompt
const imageMapping = [
  { src: 'Pátio arborizado do Bistrô Miriã-6.png', target: 'patio-horizontal.webp', width: 1600 },
  { src: 'Pátio do bistrô sob árvore madura-7.png', target: 'patio-vertical.webp', width: 900 },
  { src: 'Balcão iluminado do bistrô Miriã Soares.png', target: 'vitrine-horizontal.webp', width: 1600 },
  { src: 'Vitrine iluminada do bistrô-1.png', target: 'vitrine-vertical.webp', width: 900 },
  { src: 'Cantinho do bistrô com pratos decorativos-9.png', target: 'interior-vinho-vertical.webp', width: 900 },
  { src: 'Canto do bistrô com pratos decorativos-10.png', target: 'interior-vinho-horizontal.webp', width: 1600 },
  { src: 'Salão de bistrô com retratos históricos-3.png', target: 'retratos-vertical.webp', width: 900 },
  { src: 'Salão do bistrô com retratos históricos-4.png', target: 'retratos-horizontal.webp', width: 1600 },
  { src: 'Entrada azul do Miriã Soares Bistrô-5.png', target: 'entrada-vertical.webp', width: 900 },
  { src: 'Entrada azul do Miriã Soares Bistrô-8.png', target: 'entrada-horizontal.webp', width: 1600 },
];

async function processImages() {
  for (const item of imageMapping) {
    const srcPath = path.join(rootDir, item.src);
    const targetPath = path.join(publicAssetsDir, item.target);
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath)
        .resize({ width: item.width, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(targetPath);
      console.log(`✓ Converted ${item.src} -> ${item.target}`);
    } else {
      console.warn(`! Missing source file: ${item.src}`);
    }
  }
}

processImages().catch(err => {
  console.error('Error processing images:', err);
});
