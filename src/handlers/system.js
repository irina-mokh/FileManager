import { EOL, cpus, homedir, userInfo, arch } from 'node:os';
import { log } from '../utils/utils.js';

export const system = (flag) => {
	if (flag.startsWith('--')) {
		switch (flag.slice(2)) {
			case 'EOL':
				log.success(`Default system End-Of-Line: ${JSON.stringify(EOL)}`);
				break;
			case 'cpus':
				const cores = cpus();
				log.success(`Cores: ${cores.length}`);
				cores.forEach((core, i) => {
					log.success(`${i}: ${core.model}`);
				});
				break;
			case 'homedir':
				log.success(`Home directory: ${homedir()}`);
				break;
			case 'username':
				const user = userInfo();
				log.success(`User name: ${user.username}`);
				break;
			case 'architecture':	
				log.success(`Architecture: ${arch()}`);
				break;
			default: {
					log.err('Check your syntax. Available flags: --EOL | --cpus |--homedir | --username | --architecture');
			}
		}
	} else {
		log.err('Check your syntax. Available flags: --EOL | --cpus |--homedir | --username | --architecture');

	}
}