import { system } from './system.js';
import { nav } from './nav.js';
import { hashFile } from './hash.js';
import { files } from './files.js';
import { validateSyntax, log } from '../utils/utils.js';
import { zip } from './zip.js';
import { resolve } from 'node:path';

export const handleCLI = (input) => {
	const [command] = input.split(' ');
	const argsStr = input.slice(command.length + 1); 

	//split arguments with single quotes
	const args = argsStr.match(/"[^"]+"|[^\s]+/g);

	if (args && args.length > 0) {
		args.forEach((arg, i, arr) => {
			console.log('replacing...');
			arr[i] = arg.replace(/["']/g, "");
		});
	}
	console.log('ARGS:', args);
	switch (command){
		case 'up': 
		  validateSyntax('up', 0, args) && nav.up();
			break;
		case 'cd': 
			const absPath = resolve(argsStr.replaceAll('"',''). replaceAll('\'', ''));
			nav.cd(absPath);
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

		case 'hash':
			validateSyntax('hash <path_to_file>', 1, args) && hashFile(args[0]);
			break;

		case 'compress':
			validateSyntax('compress <path_to_file> <path_to_output_file>', 2, args) && zip(...args.slice(0,2));
			break;
		case 'decompress':
				validateSyntax('decompress <path_to_file> <path_to_output_file>', 2, args) && zip(...args.slice(0,2), true);
				break;
		
		default: {
			log.err('Invalid input');
		}
	}
}