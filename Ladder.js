function solution(A, B) {
    var results =[];
    var F = getRungCombinations(A.length);

    for (var i = 0; i < A.length; i++) 
        results.push(F[A[i]] % (1 << B[i]));

    return results;
}


function getRungCombinations(n) {
    var F = new Array(n + 1);

    F[0] = 1;
    F[1] = 1;

    for (var i = 2; i <= n; i++) 
        F[i] = (F[i - 2] + F[i -1]) % (1 << 30); // Mod 2^30 to handle large numbers.

    return F;
}
