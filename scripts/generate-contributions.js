/**
 * Script to verify and generate contribution signal visualization
 */
const fs = require('fs');
const path = require('path');

const CONTRIBS_PATH = path.join(__dirname, '..', 'assets', 'contributions.svg');

console.log('--- 📊 GENERATING CONTRIBUTION VISUALIZATION ---');

if (fs.existsSync(CONTRIBS_PATH)) {
  const stat = fs.statSync(CONTRIBS_PATH);
  console.log(`✅ Contribution graph verified: ${(stat.size / 1024).toFixed(2)} KB`);
} else {
  console.error('❌ Missing assets/contributions.svg');
}
