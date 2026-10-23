// Builds each game from its own repo and copies the build into public/games/<id>/.
// Usage: pnpm sync:games            (all games)
//        pnpm sync:games robojump   (just one)
// Set GAMES_DIR if the games don't live in ../../games.
import { execSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const gamesDir = resolve(process.env.GAMES_DIR ?? join(root, '..', '..', 'games'));
const all = ['robogolf', 'roboblast', 'robojump'];
const pick = process.argv.slice(2);
const ids = pick.length ? all.filter((g) => pick.includes(g)) : all;

const built = {};
for (const id of ids) {
  const src = join(gamesDir, id);
  if (!existsSync(src)) {
    console.error(`✗ ${id}: not found at ${src}`);
    process.exitCode = 1;
    continue;
  }
  console.log(`▸ building ${id}…`);
  if (!existsSync(join(src, 'node_modules'))) execSync('npm install', { cwd: src, stdio: 'inherit' });
  execSync('npm run build', { cwd: src, stdio: 'inherit' });

  const out = join(root, 'public', 'games', id);
  rmSync(out, { recursive: true, force: true });
  mkdirSync(out, { recursive: true });
  cpSync(join(src, 'dist'), out, { recursive: true });
  built[id] = new Date().toISOString();
  console.log(`✓ ${id} → public/games/${id}`);
}

writeFileSync(join(root, 'public', 'games', 'builds.json'), JSON.stringify(built, null, 2) + '\n');
