/**
 * Automated script to validate and regenerate profile SVG assets
 */
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'assets');
const CONFIG_PATH = path.join(__dirname, '..', 'config', 'profile.json');

console.log('--- 🚀 VALIDATING PROFILE ASSET PIPELINE ---');

if (!fs.existsSync(CONFIG_PATH)) {
  console.error('❌ Missing config/profile.json');
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
console.log(`✅ Loaded config for: ${config.identity.name} (${config.identity.title})`);

const requiredAssets = [
  'github-hero.svg',
  'focus.svg',
  'skill-progress.svg',
  'engineering-system.svg',
  '2026-path.svg',
  'build-process.svg',
  'contributions.svg',
  '3d-contribution.svg',
  'timeline.svg',
  'footer-thread.svg',
  'status-bar.svg',
  'projects/project-01.svg',
  'projects/project-02.svg',
  'projects/project-03.svg',
  'projects/project-04.svg'
];

let allValid = true;
requiredAssets.forEach(file => {
  const fullPath = path.join(ASSETS_DIR, file);
  if (fs.existsSync(fullPath)) {
    const size = (fs.statSync(fullPath).size / 1024).toFixed(2);
    console.log(`  ✓ ${file.padEnd(30)}: ${size} KB`);
  } else {
    console.warn(`  ⚠ Missing: ${file}`);
    allValid = false;
  }
});

if (allValid) {
  console.log('✨ All production assets are verified and ready!');
} else {
  console.log('⚠️ Some assets are pending creation.');
}
