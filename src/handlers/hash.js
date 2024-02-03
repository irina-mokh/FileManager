import { readFile } from 'node:fs/promises';
import { createHash} from 'node:crypto';
import { log } from '../utils/utils.js';


export const hashFile = async (filePath) => {
	if (await exists(filePath))  {
		const data = await readFile(filePath);
		const hash = createHash('sha256').update(data).digest('hex');
		log.success(`File hash: ${hash}`);
	} else {
		log.err(`File with name ${filePath} does not exists`);
	}
}