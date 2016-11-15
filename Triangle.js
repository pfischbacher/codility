function solution(A) {
    A.sort(function (a, b) {  return a - b;  });
    for (i = 0; i < A.length; i++) {
        if (A[A.length - i - 1] + A[A.length - i -2 ] > A[A.length - i])
            return 1;
    }
    return 0;
}
