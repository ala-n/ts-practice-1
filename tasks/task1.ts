
/**
 * Create type Point for the following structure:
 */
const p1: any = {x: 0, y: 0};
const p2: any = {x: 10, y: 10};
const p3: any = {x: 0, y: 10};

/**
 * Create type E-Neighborhood that describes a Point with the small radius of the closest Points in a small declared radius (e);
 */
const e1: any = {x: 0, y: 0, r: 10};
const e2: any = {x: 1, y: 1, r: 5};

/**
 * As a developers we don't want to make this types modifiable (as a type), what kind of declaration should we use?
 */

/**
 * What if vice versa we have a task to make this types modifiable (as a type), how do we change our declaration?
 */

/**
 * Can we make the Point constant type, while E-Neighborhood make modifiable?
 */


/**
 * Write the type guard for Point. When the type guard is useful?
 */
const isPoint: any = () => true;

//--------------- TESTS ---------------
describe('Type guard', () => {
	test(
		'Type guard detects Point',
		() => {
			expect(isPoint(p1)).toBe(true);
			expect(isPoint(p2)).toBe(true);
			expect(isPoint({x: -1, y: 0})).toBe(true);
		}
	);
	test(
		'Type guard detects Point',
		() => {
			expect(isPoint(false)).toBe(false);
			expect(isPoint({})).toBe(false);
			expect(isPoint({x: 0})).toBe(false);
			expect(isPoint({x: false, y: true})).toBe(false);
		}
	);
});
