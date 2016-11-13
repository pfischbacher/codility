function solution(A) {
    A.sort(function (a, b) {  return a - b;  });
    var results = [];
    results[0] = A[A.length - 1 ] * A[A.length - 2] * A[A.length -3];
    results[1] = A[A.length - 1 ] * A[0] * A[1];
    results[2] = A[0] * A[1] * A[2];
    
    return Math.max.apply(null, results);

}
