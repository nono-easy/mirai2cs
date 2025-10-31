/* eslint-disable no-undef */
/* eslint-env node */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface CopyRobotsOptions {
  isPreview: boolean;
  dist: string;
  publicDir: string;
}

function copyRobots(options: CopyRobotsOptions) {
  try {
    const { isPreview, dist, publicDir } = options;
    const from = path.join(publicDir, isPreview ? 'robots.dev.txt' : 'robots.txt');
    const to = path.join(dist, 'robots.txt');

    // 确保目标目录存在
    if (!fs.existsSync(dist)) {
      fs.mkdirSync(dist, { recursive: true });
    }

    // 检查源文件是否存在
    if (fs.existsSync(from)) {
      fs.copyFileSync(from, to);
      console.log('[robots]', isPreview ? 'Disallow (preview)' : 'Allow (prod)');
    } else {
      console.warn('[robots] Source file not found:', from);
    }
  } catch (error) {
    console.error('[robots] Error during copy:', error);
    // 不让这个脚本失败影响整个构建
  }
}

try {
  const dist = path.join(__dirname, '..', 'dist');
  const isPreview: boolean = !!(process.env.CF_PAGES_BRANCH && process.env.CF_PAGES_BRANCH !== 'main');
  const publicDir = path.join(__dirname, '..', 'public');

  copyRobots({ isPreview, dist, publicDir });
} catch (error) {
  console.error('Post-build script error:', error);
  // 确保脚本不会导致构建失败
  process.exit(0);
}
