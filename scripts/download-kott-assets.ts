import fs from 'fs';
import path from 'path';

const assets: string[] = [
  "/brand/logo-full.svg",
  "/gallery/phangan-night.jpg",
  "/media/kott-io-loop.mp4",
  "/media/kott-io-poster.jpg",
  "/work/aka-media-2.jpg",
  "/work/aka-media-cover.jpg",
  "/work/aka-media-laptop.webp",
  "/work/apps/carets-1.webp",
  "/work/apps/carets-2.webp",
  "/work/apps/carets-3.webp",
  "/work/apps/carets-icon.png",
  "/work/apps/foldless-1.webp",
  "/work/apps/foldless-2.webp",
  "/work/apps/foldless-3.webp",
  "/work/apps/foldless-icon.png",
  "/work/apps/margina-1.webp",
  "/work/apps/margina-2.webp",
  "/work/apps/margina-3.webp",
  "/work/apps/margina-icon.png",
  "/work/apps/nfcore-1.webp",
  "/work/apps/nfcore-2.webp",
  "/work/apps/nfcore-3.webp",
  "/work/apps/nfcore-icon.png",
  "/work/apps/optimized-1.webp",
  "/work/apps/optimized-2.webp",
  "/work/apps/optimized-3.webp",
  "/work/apps/optimized-icon.png",
  "/work/apps/pomlo-1.webp",
  "/work/apps/pomlo-2.webp",
  "/work/apps/pomlo-3.webp",
  "/work/apps/pomlo-icon.png",
  "/work/apps/privara-1.webp",
  "/work/apps/privara-2.webp",
  "/work/apps/privara-3.webp",
  "/work/apps/privara-icon.png",
  "/work/apps/qrdock-1.webp",
  "/work/apps/qrdock-2.webp",
  "/work/apps/qrdock-3.webp",
  "/work/apps/qrdock-icon.png",
  "/work/bean-there-2.jpg",
  "/work/bean-there-bag.webp",
  "/work/bean-there-cans.jpg",
  "/work/bean-there.jpg",
  "/work/evia-join.webp",
  "/work/evia-laptop.webp",
  "/work/evia.jpg",
  "/work/hred.webp",
  "/work/hue-and-cry-2.gif",
  "/work/hue-and-cry-3.jpg",
  "/work/hue-and-cry-4.jpg",
  "/work/hue-and-cry-cover.gif",
  "/work/phangan-devices.jpg",
  "/work/typeset-2.webp",
  "/work/typeset-3.webp",
  "/work/typeset-cover.gif"
];

const BASE_URL = 'https://kott.studio';

async function downloadFile(urlPath: string) {
  const fullUrl = `${BASE_URL}${urlPath}`;
  const targetPath = path.join(process.cwd(), 'public', urlPath.replace(/^\//, ''));
  const targetDir = path.dirname(targetPath);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  try {
    const res = await fetch(fullUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    if (!res.ok) {
      console.error(`Failed ${fullUrl}: ${res.status}`);
      return;
    }
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(targetPath, Buffer.from(buffer));
    console.log(`✓ Downloaded ${urlPath} (${buffer.byteLength} bytes)`);
  } catch (err) {
    console.error(`Error downloading ${fullUrl}:`, err);
  }
}

async function run() {
  console.log(`Downloading ${assets.length} assets from ${BASE_URL}...`);
  for (const asset of assets) {
    await downloadFile(asset);
  }
  console.log('All assets processed!');
}

run();
