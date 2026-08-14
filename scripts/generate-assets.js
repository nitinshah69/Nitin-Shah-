/**
 * Profile Visual Assets System
 * Nitin Shah (c) 2026
 * Validates and logs asset integrity across the portfolio
 */

const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'assets');
const PROJECTS_DIR = path.join(ASSETS_DIR, 'projects');

const REQUIRED_FILES = [
  'hero.svg',
  '3d-core.svg',
  'workflow.svg',
  'roadmap.svg',
  'footer.svg',
  'projects/project-01.svg',
  'projects/project-02.svg',
  'projects/project-03.svg',
  'projects/project-04.svg'
];

console.log('--- 🛠️  VALIDATING PROFILE VISUAL ASSETS ---');

let allPassed = true;

REQUIRED_FILES.forEach((file) => {
  const filePath = path.join(ASSETS_DIR, file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    console.log(`✅ [OK] ${file.padEnd(26)} (${sizeKB} KB)`);
  } else {
    console.error(`❌ [MISSING] ${file}`);
    allPassed = false;
  }
});

if (allPassed) {
  console.log('\n✨ All design system assets are intact and verified.');
} else {
  process.exit(1);
}
