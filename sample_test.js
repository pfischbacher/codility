// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/*function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    //Brute force method.
    var sum_i = 0, sum_j = 0;
    for (var i = 0; i < A.length; i++) {
        if (i > 0)
            sum_i += A[i-1];
        sum_j = 0;
        for (var j = i+1; j < A.length; j++) {
            sum_j += A[j];
        }
        if (sum_i === sum_j)
            return i;
    }
    
    return -1;
}*/

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var total = 0, sum_i = 0, sum_j = 0;
    for (var i = 0; i < A.length; i++) {
        total += A[i];
    }
    for (var j = 0; j < A.length; j++) {
        if (j > 0 )
            sum_i +=A[j-1];
        sum_j = total - sum_i - A[j];
        if (sum_i === sum_j)
            return j;
    }
    
    return -1;
}
