import { homedir } from 'node:os';
import { cwd } from 'node:process'
import path from 'node:path';
import { readdir } from 'node:fs/promises';
import { log } from '../utils.js';

export const navUp = () => {
	if (homedir() !== cwd()) {
		process.chdir(path.resolve('..'));
	} else {
		log.warn('Already in home directory');
	}
}

export const navCD = (args) => {
	try {
    process.chdir(path.join(...args));
  } catch (err) {
		log.err(err);
	} 
}

export const navList = async (args) => {
	try {
		const data = await readdir(path.resolve(...args), { withFileTypes: true });

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