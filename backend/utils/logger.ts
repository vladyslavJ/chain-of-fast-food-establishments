import colors from 'colors/safe.js';
import config from 'config';
import 'dotenv/config';

let status: number = process.env.COLORS_ENABLED
	? parseInt(process.env.COLORS_ENABLED)
	: 0;
const defaultStatus: number = config.get('COLORS_ENABLED');

if (!(status >= 0 && status <= 1)) {
	console.warn(
		colors.yellow(
			'process.env.COLORS_ENABLED does not meet requirements. Using default value.'
		)
	);
	status = defaultStatus;
}

const logger = (namespace: string) => {
	return {
		log: (message: string) => {
			if (status === 0) {
				console.log(`${namespace}: ${message}`);
			} else {
				console.log(colors.green(`${namespace}: `) + message);
			}
		},

		info: (message: string) => {
			if (status === 0) {
				console.log(`${namespace}: ${message}`);
			} else {
				console.log(colors.cyan(`${namespace}: `) + message);
			}
		},

		warn: (message: string) => {
			if (status === 0) {
				console.error(`${namespace}: ${message}`);
			} else {
				console.error(colors.yellow(`${namespace}: `) + message);
			}
		},
	};
};

export default logger;
