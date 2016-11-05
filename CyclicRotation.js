// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    new_arr = [];
    K = K % A.length;
    if ( K > 0) {
        for (i = 0; i < A.length; i++) {
            if (i - K >= 0)
                new_arr[i] = A[i - K];
            else
                new_arr[i] = A[A.length - K + i];
        }
    } else {
        new_arr = A;
    }
    
    return new_arr;
    
}
