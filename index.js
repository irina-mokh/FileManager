import { cwd } from 'node:process'
import { getUserName, log } from './utils.js';
import { runCLI } from './rl.js';
import { homedir } from 'node:os';

function run () {
	const userName = getUserName();
  log.accent(`Welcome to the File Manager, ${userName}!`);
	process.chdir(homedir());
  console.log(`You are currently in ${cwd()}`);
	runCLI(userName);
};

run();