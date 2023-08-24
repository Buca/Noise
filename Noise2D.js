import bilinear from './Bilinear.js';
import XOR128 from './XOR128.js';
import { add, addBigger } from './BlendModes.js';

export default class Noise2D {

	constructor({

		octaves = 1,
		resolution = 1,
		interpolation = bilinear,
		seed = 0,
		random = XOR128.random,
		blend = addBigger,
		scale = 2,
		
		type = 'float',
		min = 0, 
		max = 1

	}) {

		this.octaves = octaves;
		this.resolution = resolution;
		this.interpolation = interpolation;
		this.seed = seed;
		this.random = random;
		this.blend = blend;
		this.scale = scale;

	};

	get( x, y ) {

		const octaves = this.octaves;
		const res = this.resolution;
		const interpolation = this.interpolation;
		const seed = this.seed;
		const random = this.random;
		const blend = this.blend;
		const scale = this.scale;

		let result = 0;

		for ( let i = 0; i < octaves; i ++ ) {

			const bSX = Math.floor( x / res );
			const bSY = Math.floor( y / res );
			const bEX = bSX + 1;
			const bEY = bSY + 1;

			const ul = random( seed, bSX, bSY );
			const ur = random( seed, bEX, bSY );
			const bl = random( seed, bSX, bEY );
			const br = random( seed, bEX, bEY );

			const value = interpolation(
				ul, ur, bl, br,
				x/res - bSX,
				y/res - bSY
			);

			result = blend( result, value );

			x *= scale;
			y *= scale;

		}

		return result / octaves;

	};

}