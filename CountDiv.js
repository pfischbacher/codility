function solution(A, B, K) {
    var cnt = Math.floor( B / K ) - Math.ceil( A / K ) + 1;
    return cnt;
}
