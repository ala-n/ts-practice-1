/**
 * Make the following functions strictly typed
 */

function noop() {
	return;
}


function identity(arg) {
	return arg;
}


function throwError() {
	throw Error('Something bad had happened...');
}


function parse(data) {
	try {
		return JSON.parse(data); /** Nobody knows what it will be...*/
	} catch {
		return undefined;
	}
}