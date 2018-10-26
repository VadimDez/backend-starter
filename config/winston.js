/**
 * Created by Vadym Yatsyuk on 07.08.18
 */

const util = require("util");
const winston = require("winston");
const logger = winston.createLogger();
const env = (process.env.NODE_ENV || "").toLowerCase();

const formatMessage = winston.format.printf(info => {
	return `${info.timestamp} [${info.level}]: ${info.message}`;
});

const format = winston.format.combine(
	winston.format.timestamp(),
	winston.format.colorize(),
	formatMessage
);

// Override the built-in console methods with winston hooks
switch (env) {
	case "production":
		production = true;
		logger.add(
			new winston.transports.Console({
				timestamp: true,
				format,
				level: "warn"
			})
		);
		break;
	case "test":
		logger.add(
			new winston.transports.Console({
				timestamp: true,
				format,
				level: "debug"
			})
		);
		break;
	default:
		logger.add(
			new winston.transports.Console({
				timestamp: true,
				format,
				level: "debug"
			})
		);
		break;
}

function formatArgs(args) {
	return [util.format.apply(util.format, Array.prototype.slice.call(args))];
}

console.log = function() {
	logger.info.apply(logger, formatArgs(arguments));
};
console.info = function() {
	logger.info.apply(logger, formatArgs(arguments));
};
console.warn = function() {
	logger.warn.apply(logger, formatArgs(arguments));
};
console.error = function() {
	logger.error.apply(logger, formatArgs(arguments));
};
console.debug = function() {
	logger.debug.apply(logger, formatArgs(arguments));
};
