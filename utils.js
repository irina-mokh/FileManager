import { fontLog } from './constants.js';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

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


export const getDir = (url) => dirname(fileURLToPath(url));


export const log = {
	warn: (msg) => {
		console.log(fontLog.FgYellow, msg);
	},
	accent: (msg) => {
		console.log(fontLog.Bright, msg);
	},
	err: (msg) => {
		console.log(fontLog.FgRed, msg);
	},
	// success:
}