// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    A.sort();
    
    result = 0;
    cnt=1;
    i = 1;
    if (A[0] != A[1]) {
        result = A[0];
    } else {
        while (i < A.length) {
            if (A[i] == A[i-1] ) {
                cnt ++;
            }
            else {
            	if (cnt%2 == 1) {
                	break;
                } else {
                	cnt = 1;
                }
            }
            i++;
        }
        result = A[i-1];
    }
    return result;
}
