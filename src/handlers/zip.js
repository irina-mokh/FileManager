import { log } from '../utils/utils.js';
import { createReadStream, createWriteStream } from "node:fs";
import { createBrotliCompress, createBrotliDecompress } from "node:zlib";
import { pipeline } from 'node:stream/promises';

export const zip = async (inFilePath, outFilePath, isUnzip = false) => {
	try {
		const inStream = createReadStream(inFilePath, { flags: "a+" });
    const outStream = createWriteStream(outFilePath, { flags: "wx" });
		const archiveStream = isUnzip ? createBrotliDecompress() : createBrotliCompress();
		await pipeline(inStream, archiveStream, outStream);
		if (isUnzip) {
			log.success(`Archive ${inFilePath} successfully unzipped`);
		} else {
			log.success(`File ${inFilePath} successfully zipped`);
		}
	} catch (err) {
		log.err('Zip operation failed: ', err);

	}				
}
