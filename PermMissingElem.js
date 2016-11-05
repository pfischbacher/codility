function solution(A) {
    result = 0;
    if (A.length > 0 ) {
        A.sort(function (a, b) {  return a - b;  });
        for (i = 1; i <= A.length; i++) {
            if (A[i-1] !=  i) {
                result = i;
                break;
            }
        }
        if (result == 0)
            result = A[A.length-1] + 1;
    } else {
        result = 1;
    }

    return result;
}
