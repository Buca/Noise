import hash from './Hash.js';

export default class XOR128 {

	static random( ...seed ) {

		seed = hash( seed );

		const x = seed;
		const t = x ^ ((x << 11) >>> 0);
		const w = 1145;

		const integer = (w ^ (w >>> 19) ^ (t ^ (t >>> 8))) >>> 0;
		const result = integer / 4294967296;

		return result;

	}

};

/* Example + Minimal analysis:

const seed = 11111111;
const iter = 10;

const result = [];
let average = 0;
for ( let i = 0; i < iter; i ++ ) {

	const value = XOR128.random( seed, i );

	average += value;
	result.push( value );

}

average /= (iter);

let variance = 0;
for ( let i = 0; i < iter; i ++ ) {

	variance += (result[i] - average)**2 

}

variance /= (iter-1);
variance = variance;

console.table( result );
console.log('Seed: ' + seed );
console.log('Average: ' + average );
console.log('Variance: ' + variance );

*/