import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const componentsDir = path.join(projectRoot, 'src', 'app', 'pages', 'Components');
const foundationDir = path.join(projectRoot, 'src', 'app', 'pages', 'Foundation');
const pagesDir = path.join(projectRoot, 'src', 'app', 'pages');

const EXPECTED_CLASS = 'w-full max-w-5xl mx-auto';

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  if (!content.includes(EXPECTED_CLASS)) {
    console.error(`❌ ${path.relative(projectRoot, filePath)} does not contain "${EXPECTED_CLASS}"`);
    return false;
  }
  console.log(`✅ ${path.relative(projectRoot, filePath)} passed`);
  return true;
}

function checkDir(dir) {
  let passed = true;
  if (!fs.existsSync(dir)) return passed;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.tsx') && file.includes('Showcase')) {
      if (!checkFile(path.join(dir, file))) {
        passed = false;
      }
    }
  }
  return passed;
}

function checkFoundation(dir) {
    let passed = true;
    if (!fs.existsSync(dir)) return passed;
    
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.endsWith('.tsx')) {
        if (!checkFile(path.join(dir, file))) {
          passed = false;
        }
      }
    }
    return passed;
  }

console.log('Verifying layout consistency...');
let allPassed = true;

allPassed = checkDir(componentsDir) && allPassed;
allPassed = checkFoundation(foundationDir) && allPassed;

// Check Components.tsx and Foundation.tsx
if (!checkFile(path.join(pagesDir, 'Components.tsx'))) allPassed = false;
if (!checkFile(path.join(pagesDir, 'Foundation.tsx'))) allPassed = false;

if (allPassed) {
  console.log('\n✨ All layout consistency checks passed!');
  process.exit(0);
} else {
  console.error('\n❌ Layout consistency checks failed!');
  process.exit(1);
}
