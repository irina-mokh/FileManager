import { cwd } from 'node:process'
import { getUserName, log, logCwd } from './utils/utils.js';
import { runCLI } from './readline/rl.js';
import { homedir } from 'node:os';

async function run () {
	const userName = getUserName();
	log.accent(`Welcome to the File Manager, ${userName}!`);
	process.chdir(homedir());
	logCwd();
	runCLI(userName);
};

try {
	await run();
} catch (err) {
	log.err(err);
}