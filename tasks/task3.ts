/**
 * Make the following class hierarchy strictly typed
 */


/**
 * Class ObjectLogger that should write passed entries to console if that's non-empty objects.
 * Objects stringifies according to format internal method implementation
 * */
class ObjectLogger {
	/**
	 * Writes (logs) passed entry to console
	 */
	write(obj) {
		if (!this._isValid(obj)) return;
		console.log(this.prefix + this.format(obj));
	}

	/**
	 * Internal no  overridable precondition to write entry to console
	 */
	_isValid(e) {
		if (typeof e === 'object' || typeof e === 'function') {
			return Object.keys(e).length > 0;
		}
		return false;
	}
}

/** Simple (generic) ObjectLogger implementation */
class GenericObjectLogger extends ObjectLogger {
	prefix = 'GenericLogger: ';

	format (obj) {
		return JSON.stringify(obj);
	}
}