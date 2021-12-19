// priority: 1) process.env 2) dotenv files 3) feature flags
const path = require('path');
const { getDotEnv, escapeQuotes } = require('@lipsurf/cli/lib/util.js');
const packageJson = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';
const dotEnvFileName = isProd ? '.env' : '.env.development';
const dotEnvFile = path.join(__dirname, dotEnvFileName);

let dotEnv = {};
try {
	dotEnv = {
		...getDotEnv(path.join(__dirname, '..', '..', dotEnvFileName)),
		...getDotEnv(dotEnvFile),
	};
} catch (e) {
	console.warn("Could not find .env file")
}

function wOutSpecifier(str) {
  return str.match(/\d.*/)[0];
}

function getVal(_dotEnv, _key, featureFlagVal) {
	return typeof process.env[_key] !== 'undefined' ? `"${escapeQuotes(process.env[_key])}"` : typeof _dotEnv[_key] !== "undefined" ? `"${escapeQuotes(_dotEnv[_key])}"` : `"${escapeQuotes(featureFlagVal)}"`;
}

const LATEST_PLUGINS_VERSION = wOutSpecifier(packageJson.dependencies["@lipsurf/plugins"]);
const LATEST_PREM_PLUGINS_VERSION = wOutSpecifier(packageJson.dependencies["@lipsurf/premium-plugins"]);

module.exports = {
	dotEnvFile,
	getVal,
	LATEST_PLUGINS_VERSION,
	LATEST_PREM_PLUGINS_VERSION,
	defines: Object.entries(featureFlags.FEATURE_FLAGS).reduce((memo, [key, val]) => 
	{
		return {
			...memo,
			[`process.env.${key}`]: getVal(dotEnv, key, val),
		}
	}, {
		'process.env.NODE_ENV': isProd ? '"production"' : '"development"',
		// importing the package.json in store-lib did not work, this is a workaround
		'process.env.LATEST_PLUGINS_VERSION': `"${LATEST_PLUGINS_VERSION}"`,
		'process.env.LATEST_PREM_PLUGINS_VERSION': `"${LATEST_PREM_PLUGINS_VERSION}"`,
	})
};