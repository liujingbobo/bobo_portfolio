const fs = require('fs');
const path = require('path');

// Simple 16x16 pixel art favicon - "J" for Jingbo
// Using cyan neon color
const pixels = [
  '................',
  '................',
  '....######......',
  '...#............',
  '...#............',
  '...#............',
  '...#............',
  '...#............',
  '...#............',
  '...#............',
  '...#............',
  '...#............',
  '....#######.....',
  '...............#.',
  '..............#..',
  '..................'
];

// Create a simple BMP-based ICO
function createIco() {
  // ICO header
  const iconDir = Buffer.alloc(6);
  iconDir.writeUInt16LE(0, 0);  // Reserved
  iconDir.writeUInt16LE(1, 2);  // Type (1 = ICO)
  iconDir.writeUInt16LE(1, 4);  // Number of images

  // Icon directory entry
  const iconEntry = Buffer.alloc(16);
  iconEntry.writeUInt8(16, 0);   // Width
  iconEntry.writeUInt8(16, 1);   // Height
  iconEntry.writeUInt8(0, 2);    // Color palette
  iconEntry.writeUInt8(0, 3);    // Reserved
  iconEntry.writeUInt16LE(1, 4); // Color planes
  iconEntry.writeUInt16LE(32, 6); // Bits per pixel
  iconEntry.writeUInt32LE(40 + 16*16*4 + 16*16/8, 8); // Image size
  iconEntry.writeUInt32LE(22, 12); // Offset to image data

  // BITMAPINFOHEADER
  const bmpHeader = Buffer.alloc(40);
  bmpHeader.writeUInt32LE(40, 0);   // Header size
  bmpHeader.writeInt32LE(16, 4);   // Width
  bmpHeader.writeInt32LE(32, 8);   // Height (doubled for ICO)
  bmpHeader.writeUInt16LE(1, 12);  // Planes
  bmpHeader.writeUInt16LE(32, 14); // Bits per pixel
  bmpHeader.writeUInt32LE(0, 16);  // Compression
  bmpHeader.writeUInt32LE(16*16*4, 20); // Image size
  bmpHeader.writeInt32LE(0, 24);   // X pixels per meter
  bmpHeader.writeInt32LE(0, 28);   // Y pixels per meter
  bmpHeader.writeUInt32LE(0, 32);  // Colors used
  bmpHeader.writeUInt32LE(0, 36);  // Important colors

  // Pixel data (BGRA format, bottom-up)
  const pixelData = Buffer.alloc(16 * 16 * 4);
  const cyan = [0, 255, 245, 255]; // BGRA
  const transparent = [0, 0, 0, 0];

  for (let y = 0; y < 16; y++) {
    for (let x = 0; x < 16; x++) {
      const idx = (15 - y) * 16 + x; // Bottom-up
      const char = pixels[y][x];
      const color = char === '#' ? cyan : transparent;
      pixelData[idx * 4] = color[0];
      pixelData[idx * 4 + 1] = color[1];
      pixelData[idx * 4 + 2] = color[2];
      pixelData[idx * 4 + 3] = color[3];
    }
  }

  // AND mask (1 bit per pixel, all 0 = opaque)
  const andMask = Buffer.alloc(16 * 16 / 8, 0);

  const ico = Buffer.concat([iconDir, iconEntry, bmpHeader, pixelData, andMask]);

  fs.writeFileSync(path.join(__dirname, 'public/favicon.ico'), ico);
  console.log('Favicon created: public/favicon.ico');
}

createIco();
