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

    for (var i = 0; i < str.length; i++) {
    	var j = str[i]
    }

    var result = [];
    var a = {};

    // for(var i = 0; i < arr.length; i++){
    // 	var j = arr[i];
        
    // 	if (a[j] && result.indexOf(j)) { 
    // 		result.push(j);
    // 	} else {
    //         a[j] = true;
    //     }
    // }

    for(var i = 0; i < str.length; i++){
    	var j = str[i];
        
    	if (result.indexOf(j) !== -1) {
            a[j] = true;
    	} else {
            result.push(j);
        }
    }

    return result;
}


