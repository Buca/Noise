import NN from './NearestNeighbor.js';

export default NN2D( ul, ur, bl, br, x, y ) {

	return NN(
		NN( ul, ur, x ),
		NN( bl, br, x ),
		y
	);

};