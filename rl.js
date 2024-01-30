import { createInterface } from 'node:readline/promises';
import {
	cwd,
  stdin as input,
  stdout as output,
} from 'node:process';
import { fontLog } from './constants/index.js';

export const runCLI = (username) => {
	const rl = createInterface({ input, output });
	rl.prompt();

	rl.on('line', input => {
    if (input === '.exit') {
      rl.close();
    } else {
      console.log(`You are currently in ${cwd()}`);
      //handle
      // console.log(input);
      rl.prompt();
    }
  })

  rl.on('close', () => {
    console.log(fontLog.Bright, `Thank you for using File Manager, ${username}, goodbye!`);
    process.exit(0);
  })
}


  