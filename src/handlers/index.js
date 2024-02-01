import { fontLog } from '../utils/constants.js';
import { nav } from './nav.js';
import { files } from './files.js';
import { log } from '../utils/utils.js';

export const handleCLI = (input) => {
	//temp log
	console.log(fontLog.FgCyan, 'handle: ', input);

	const [command, ...args] = input.split(' ');
	switch (command){
		case 'up': 
			nav.up();
			break;
		case 'cd': 
			nav.cd(args);
			break;
		case 'ls':
			nav.list(args);
			break;

		case 'cat':
			files.catenate(args);
			break;
		default: {
			log.err('Invalid input');
		}
	}
}