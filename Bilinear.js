import linear from './Linear.js';

export default function bilinear( ul, ur, bl, br, x, y ) {

	return linear(
		linear( br, bl, x ),
		linear( ur, ul, x ),
		y
	);

};