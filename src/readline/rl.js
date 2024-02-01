import { createInterface } from 'node:readline/promises';
import {
	cwd,
  stdin as input,
  stdout as output,
} from 'node:process';
import { fontLog } from '../utils/constants.js';
import { handleCLI } from '../handlers/index.js';
import { log, logCwd } from '../utils/utils.js';

export const runCLI = (username) => {
	const rl = createInterface({ input, output });
	rl.prompt();

	rl.on('line', input => {
    if (input === '.exit') {
      rl.close();
    } else {
      handleCLI(input.trim());
      logCwd();
      rl.prompt();
    }
  })

  rl.on('close', () => {
    console.log(fontLog.Bright, `Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
  })
}


  