import { cwd } from 'node:process'
import { getUserName } from './utils.js';
import { runCLI } from './rl.js';
import { fontLog } from './constants/index.js';

function run () {
	const userName = getUserName();
  console.log(fontLog.Bright,`Welcome to the File Manager, ${userName}!`);
  console.log(`You are currently in ${cwd()}`);
	runCLI(userName);
};

run();