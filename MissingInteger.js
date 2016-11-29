function solution(A) {
    var result = 1;
    var i = 0;
    var B = [];
    
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
