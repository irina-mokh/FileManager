import { cwd } from 'node:process';
import { exists, log } from '../utils/utils.js';
import { join } from 'node:path';
import { writeFile, rename, rm } from 'node:fs/promises';
import { createReadStream, createWriteStream } from 'node:fs';

export const files  = {
	catenate: async (filePath) => {
		if (await exists(filePath)) {
			const readStream = createReadStream(join(cwd(), filePath), 'utf-8');
			readStream.on('data', (res) => {
				log.content(res) 
		}); 
		} else {
			log.err(`File with name ${filePath} does not exists`);
		}
		
	},
	
	add: async (fileName) => {
		try {
			await writeFile(join(cwd(), fileName), '', {flag: 'wx'});
			log.success(`${fileName} successfully created!`)
		} catch (err) {
			log.err('File creation operation failed: ', err);
		} 
	},
	
	rename: async (src, dest) => {
		if (await exists(dest)) {
			log.err(`${dest} already exists`);
		} else {
			try {
				await rename(src, dest);
				log.success(`${src} successfully renamed to ${dest}!`)
			} catch (err) {
				log.err('File renaming failed: ' + err);
			}
		}
	},

	copy: async (filePath, dirPath) => {
		if (await exists(filePath) && await exists(dirPath)) {
			const readable = createReadStream(join(cwd(), filePath), { encoding: 'utf8'});

			const writable = createWriteStream(join(cwd(), dirPath, filePath));

			try {
				readable.pipe(writable);
				log.success(`File ${filePath}	has been copied successfully!`);
			} catch (err){
				log.err('File copying failed: ' + err);
			}
		} else {
			log.err('One of paths does not exist');
		}
		
	},

	remove: async (filePath) => {
		try {
			await rm(join(cwd(), filePath));
			log.success(`File ${filePath}	has been removed successfully!`);
		} catch (err){
			log.err('File removing failed: ' + err);
		}
	},
}