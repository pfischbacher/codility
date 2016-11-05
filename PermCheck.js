function solution(A) {
    result = 1;
    if (A.length > 0 ) {
        A.sort(function (a, b) {  return a - b;  });
        for (i = 1; i <= A.length; i++) {
            if (A[i-1] !=  i) {
                result = 0;
                break;
            }
        }
    } else {
        result = 0;   
    }

    return result;
}
