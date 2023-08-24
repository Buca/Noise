export function add( result, value ) {

	return result + value;

};

export function addBigger( result, value) {

	return result < value && result !== 0 ? result : value + result;

};