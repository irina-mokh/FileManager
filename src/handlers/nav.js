import { homedir } from 'node:os';
import { cwd } from 'node:process'
import path from 'node:path';
import { readdir } from 'node:fs/promises';
import { log } from '../utils/utils.js';

export const nav  = {
	up: () => {
		process.chdir('..');
	},

	cd: (args) => {
		if (args.length > 1) {
			log.err('Too many arguments');
		}
		try {
			// remove quotes from path
			args = args.map(p => p.replaceAll('"', ''));
			args = args.map(p => p.replaceAll('\'', ''));
			process.chdir(args[0]);

		} catch (err) {
			log.err(err);
		} 
	},

	list: async (args) => {
		if (args.length > 0) {
			log.err('Too many arguments, works only for current directory');
		}
		try {
			const data = await readdir(cwd(), { withFileTypes: true });

			const res = data
				.sort((a, b) => a.name - b.name)
				.sort((a, b) => a.isFile()- b.isFile())
				.map(item => ({ Name: item.name, Type: item.isFile() ? "file" : 'directory'}))

			console.log('\n');
			console.table(res);
		} catch (err){
			log.err(err);
		}
	}
}