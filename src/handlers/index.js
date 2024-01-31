import { fontLog } from '../utils/constants.js';
import { navUp, navCD, navList } from './nav.js';
import { log } from '../utils/utils.js';

export const handleCLI = (input) => {
	//temp log
	console.log(fontLog.FgCyan, 'handle: ', input);

	const [command, ...args] = input.split(' ');
	switch (command){
		case 'up': 
			navUp();
			break;
		case 'cd': 
			navCD(args);
			break;
		case 'ls':
			navList(args);
			break;
		default: {
			log.err('Unknown command');
		}
	}
}