function solution(A) {
    var sum = 0, max = -1000000;
    for (var i = 0; i < A.length; i++) {
        sum += A[i];
        if (sum > max)
            max = sum;
        if (sum < 0)
            sum = 0;
    }
    return max;
}
