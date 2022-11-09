
/**
 * Make a function tha t calculates average of the passed numeric values,
 * Write correct types and JS/TS Doc
 */
export const avg: any = () => void 0;


//--------------- TESTS ---------------
describe('Average function tests', () => {
	test.each([
		[1, 1, 1],
		[1, 3, 2],
		[0, 0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1, 1],
		[1, 3, 5, 7, 9, 5],
		[0, 0],
		[0]
	])('%d %d %d %d %d', (...args: any[]) => {
		expect(avg.apply(null, args.slice(0, -1))).toEqual(args.slice(-1)[0])
	});
});

//--------------- SPELLING ---------------
// console.log(avg('1', '2'));
// console.log(avg({}, {}));


//--------------- APEX ---------------
// Prevent call without arguments (***)
// console.log(avg());