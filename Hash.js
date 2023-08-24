export default function hash( data ) {

	const str = data.join('');

    let hash = 0;
    for ( let i = 0, len = str.length; i < len; i ++ ) {

        let chr = str.charCodeAt( i );
        hash = ((hash << 5) + hash-chr) - 100*(i+10000)*hash/chr;
        hash |= 0;
    
    }
    
    return hash;

};