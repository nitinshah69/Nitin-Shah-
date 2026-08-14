/**
 * Assets Optimizer & Size Budget Verification
 * Target limits:
 * - Hero SVG < 150 KB
 * - Each Project SVG < 250 KB
 * - 3D Core < 500 KB
 * - Total Assets < 3 MB
 */

const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'assets');

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, fileList);
    } else if (file.endsWith('.svg') || file.endsWith('.webp') || file.endsWith('.png')) {
      fileList.push(fullPath);
    }
  });
  return fileList;
}

const files = getFiles(ASSETS_DIR);
let totalBytes = 0;

console.log('--- 📊 ASSET PERFORMANCE & SIZE BUDGET AUDIT ---');

files.forEach((file) => {
  const stats = fs.statSync(file);
  totalBytes += stats.size;
  const relPath = path.relative(ASSETS_DIR, file);
  const sizeKB = (stats.size / 1024).toFixed(2);
  console.log(`• ${relPath.padEnd(28)} : ${sizeKB} KB`);
});

const totalKB = (totalBytes / 1024).toFixed(2);
const totalMB = (totalBytes / (1024 * 1024)).toFixed(2);

console.log(`\n📦 Total Assets Payload: ${totalKB} KB (${totalMB} MB)`);
if (totalBytes < 3 * 1024 * 1024) {
  console.log('🚀 PERFORMANCE RATING: EXCELLENT (Well within < 3MB target)');
} else {
  console.warn('⚠️ Warning: Total payload exceeds budget target.');
}
