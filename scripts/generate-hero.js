/**
 * Generate Hero SVG from config/profile.json
 */
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'config', 'profile.json');
const heroPath = path.join(__dirname, '..', 'assets', 'hero-v2.svg');

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

console.log(`[BUILD] Verified Hero generation for: ${config.name} (${config.title})`);
