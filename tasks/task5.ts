/**
 * Create a function `defined` that returns first defined value from two passed ones
 */
const defined = (a: any, b: any): any => null;

//--------------- TESTS ---------------
describe('Defined function tests', () => {
	test(
		'If first arg != undefined return first arg',
		() => {
			const obj = {};
			expect(defined(0, null)).toBe(0);
			expect(defined(1, null)).toBe(1);
			expect(defined(obj, null)).toBe(obj);
		}
	);

	test(
		'If first arg == undefined return first arg',
		() => {
			const obj = {};
			expect(defined(undefined, null)).toBe(null);
			expect(defined(undefined, 0)).toBe(0);
			expect(defined(undefined, obj)).toBe(obj);
		}
	);


	//--------------- APEX ---------------
	// test(
	// 	'If first arg == undefined return first arg',
	// 	() => {
	// 		const obj = {};
	// 		expect(defined(undefined, undefined, 1)).toBe(1);
	// 		expect(defined(undefined, undefined, undefined, obj)).toBe(obj);
	// 	}
	// );
});