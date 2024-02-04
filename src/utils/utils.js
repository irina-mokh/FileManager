import { fontLog } from './constants.js';
import  { join } from 'node:path';
import { cwd } from 'node:process';
import { access } from 'node:fs/promises';

export const getUserName = () => {
	let username;
	process.argv.forEach((arg)=>{
		if (arg.startsWith('--username') && arg.includes('=')) {
			username = arg.split('=')[1];
		}
	});
	if (!username) {
		// notification for wrong  username syntax
		log.warn('Prompt format should be: npm run start -- --username=your_username');
		return "Stranger";
	} else {
		return username;
	}
}

export const log = {
	warn: (msg) => {
		console.log(fontLog.FgYellow, msg);
	},
	accent: (msg) => {
		console.log(fontLog.Bright, msg);
	},
	system: (msg) => {
		console.log(fontLog.FgWhite, msg);
	},
	success: (msg) => {
		console.log(fontLog.FgGreen, msg);
	},
	err: (msg) => {
		console.log(fontLog.FgRed, 'Operation failed: ' +  msg);
	},
	content: (text) => {
		console.log(fontLog.FgBlue, text);
	},
	gray: (text) => {
		console.log(fontLog.FgGray, text);
	}
}

export const logCwd = () => {
	log.gray(`You are currently in ${cwd()}`);
}

export const validateSyntax = (syntax, n, args) => {
	if (args && args.length > n) {
		if (n===0) {
			log.warn(`No arguments allowed with this command`);
		} else {
			log.warn(`Only ${n} arguments allowed for this command,`);
		}
		log.warn(`Use next syntax: ${syntax}`);
		return false;
	} else { 
		return true
	}
}

export const exists = async (p) => {
	try {
		await access(join(cwd(), p));
		return true;
	} catch {
		return false;
	}
}