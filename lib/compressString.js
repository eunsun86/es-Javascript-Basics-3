/*
 * 주어진 String에서 연속으로 중복되는 알파벳을 중복되지 않게 변환하여 리턴하세요.
 *
 * < Sample >
 *
 * var str = 'aaabcccdd';
 * compressString(str); => 'abcd'
 *
 * var str2 = 'aabbbcadddaaa';
 * compressString(str2); => 'abcada';
 *
 * var str3 = 'abcd';
 * compressString(str3); => 'abcd';
 *
 * var str4 = '';
 * compressString(str4); => ''
 *
 * - Vanilla Coding -
 */

function compressString (str) {
    if (typeof str !== 'string') {
    	throw new TypeError();
    }

    if (str === '') { // str.length === 0
    	return str; // ''
    }

    var result = [];
    var a = {};

    for(var i = 0; i < str.length; i++){
    	var j = str[i];
        var leg = result.length -1;
        
    	if (j !== result[leg]) {
           result.push(j);
    	}
    }

    return result.join('');
}


