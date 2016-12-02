function solution(A) {
    var sum = 0;
    var max = 0;
    for (var i = 1; i < A.length; i++) {
        sum = sum + A[i] - A[i-1];
        if (sum > 0 ) {
            if (max < sum)
                max = sum;
        } else
            sum = 0;
    }
    return max;
}
