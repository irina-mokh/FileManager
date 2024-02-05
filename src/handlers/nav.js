import { cwd } from 'node:process'
import { readdir } from 'node:fs/promises';
import { log } from '../utils/utils.js';

export const nav  = {
	up: () => {
		process.chdir('..');
	},

	cd: (path) => {
		try {
			process.chdir(path);
		} catch (err) {
			log.err(err);
		} 
	},

	list: async () => {
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