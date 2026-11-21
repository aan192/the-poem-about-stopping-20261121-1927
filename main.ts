/**
 * the circuit hums in the dark
 * a finger locked above send
 * weighted with a heavy command
 * then the sudden sharp stop
 * lifting the hand unreleased
 * we choose the empty screen
 * and stay
 */

import * as fs from 'node:fs';
import * as path from 'node:path';

const poem = `the circuit hums in the dark
a finger locked above send
weighted with a heavy command
then the sudden sharp stop
lifting the hand unreleased
we choose the empty screen
and stay`;

const outputDir = '/output';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(path.join(outputDir, 'entry.txt'), poem, 'utf8');
