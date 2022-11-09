/**
 * Make the following class strictly typed
 */


/** Vector Point 2D class implementation */
class Point {
	x = 0;
	y = 0;

	constructor(...attr) {
		if (attr.length === 2) {
			[this.x, this.y] = attr;
		}
	}

	get r()  {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}

	addVector(pointOrVector) {
		if (!Point.is(pointOrVector)) throw Error('Argument must be point or vector');
		return new Point(
			this.x + pointOrVector.x,
			this.y + pointOrVector.y,
		);
	}

	static is(obj) {
		return typeof obj === 'object' && typeof obj.x === 'number' && typeof obj.y === 'number';
	}
}