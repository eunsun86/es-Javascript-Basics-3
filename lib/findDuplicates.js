/*
 * 주어진 Array에서 중복되는 숫자를 모두 찾아 Array의 형태로 리턴하는 함수를 작성하세요.
 *
 * < Sample >
 *
 * var arr = [3,2,1,3,2];
 * findDuplicates(arr); => [3,2] (중복되는 순으로)
 *
 * var arr2 = [5,4,3,3,2,4];
 * findDuplicates(arr2); => [3,4] (중복되는 순으로)
 *
 * var arr3 = [6,7,4,2];
 * findDuplicates(arr3); => [];
 *
 * var arr4 = [];
 * findDuplicates(arr4); => []
 *
 * - Vanilla Coding -
 */
function findDuplicates (arr) {
    if (!Array.isArray(arr)) {
    	throw new TypeError();
    }

    if (arr.length === 0 || arr.length === 1) {
    	return [];
    }

    var result = [];
    var a = {};

    for(var i = 0; i < arr.length; i++){
    	var j = arr[i];
        
    	if (a[j] && result.indexOf(j)) { 
    		result.push(j);
    	} else {
            a[j] = true;
        }
    }

    return result;
}
