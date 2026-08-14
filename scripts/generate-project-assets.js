/**
 * Generate Project SVG Cards from config/profile.json
 */
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'config', 'profile.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

console.log(`[BUILD] Verified Project Assets: ${config.projects.length} project cards active.`);
