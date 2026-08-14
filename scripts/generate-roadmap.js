/**
 * Generate Roadmap and Path validations
 */
const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'config', 'profile.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

console.log(`[BUILD] Verified Roadmap: ${config.learningRoadmap.length} milestones loaded.`);
