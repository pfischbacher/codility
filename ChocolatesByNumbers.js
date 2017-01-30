function solution(N, M) {
    var chocolates = N / choco_count(N, M);

    return chocolates;
}

function choco_count(a, b) {
    var pieces;
    if ( a % b == 0 )
        pieces = b;
    else
        pieces = choco_count(b, a % b);

    return pieces;
}
