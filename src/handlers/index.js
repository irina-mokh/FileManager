import { fontLog } from '../utils/constants.js';
import { system } from './system.js';
import { nav } from './nav.js';
import { files } from './files.js';
import { validateSyntax, log } from '../utils/utils.js';

export const handleCLI = (input) => {
	const [command, ...args] = input.split(' ');
	switch (command){
		case 'up': 
		  validateSyntax('up', 0, args) && nav.up();
			break;
		case 'cd': 
			validateSyntax('cd <directory_name>', 1, args) && nav.cd(args);
			break;
		case 'ls':
			validateSyntax('ls', 0, args) && nav.list(args);
			break;

		case 'cat':
			validateSyntax('cat <path_to_file>', 1, args) && files.catenate(args[0]);
			break;
		case 'add':
			validateSyntax('add <new_file_name>', 1, args) && files.add(args[0]);
			break;
		case 'rn':
			validateSyntax('rn <path_to_file new_filename>', 2, args) && files.rename(...args.slice(0,2));
			break;
		case 'cp':
			validateSyntax('cp <path_to_file> <path_to_new_directory>', 2, args) && files.copy(...args.slice(0,2));
			break;
		case 'mv':
			validateSyntax('mv <path_to_file> <path_to_new_directory>', 2, args) && files.copy(...args.slice(0,2), files.remove(args[0]));
			break;
		case 'rm':
				validateSyntax('rm <path_to_file>', 1, args) && files.remove(args[0]);
				break;
			
		case 'os':
				validateSyntax('os --EOL | --cpus |--homedir | --username | --architecture', 1, args) && system(args[0]);
				break;

		
		default: {
			log.err('Invalid input');
		}
	}
}