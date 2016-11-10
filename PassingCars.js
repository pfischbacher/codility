function solution(A) {
    var pair_count = 0, total_pairs = 0;
    // write your code in JavaScript (Node.js 6.4.0)
    for (i = 0; i < A.length; i++) {
        if (A[i] === 0)
            pair_count++;
        else
            total_pairs += pair_count;
        if (total_pairs > 1000000000) {
            total_pairs = -1;
            break;
        }
    }
    return total_pairs;
}
