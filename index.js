import { cwd } from 'node:process'
import { getUserName } from './utils.js';
import { runCLI } from './rl.js';
import { fontLog } from './constants/index.js';
import { homedir } from 'node:os';

function run () {
	const userName = getUserName();
  console.log(fontLog.Bright,`Welcome to the File Manager, ${userName}!`);
	process.chdir(homedir());
  console.log(`You are currently in ${cwd()}`);
	runCLI(userName);
};

run();