function solution(A) {
    result = 1;
    i = 0;
    B = [];
    
    if (A.length > 0 ) {
        A.sort(function (a, b) {  return a - b;  });

        while ( i < A.length ) {
            if (A[i] > 0) {
                if (A[i] == result) {
                    result++;
                } else if (A[i] > result)
                    return result;
            }
            i++;
        }
    }
    return result;
}
