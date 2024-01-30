import { fontLog } from './constants/index.js';

export const getUserName = () => {
	let username;
	process.argv.forEach((arg)=>{
		if (arg.startsWith('--username') && arg.includes('=')) {
			username = arg.split('=')[1];
		}
	});
	if (!username) {
		// notification for wrong  username syntax
		console.log(fontLog.FgYellow, 'Prompt format should be: npm run start -- --username=your_username');
		return "Stranger";
	} else {
		return username;
	}
}

