function solution(A, B) {
    var count = 0;

    for (var i = 0; i < A.length; i++) {
        if (primeMatch(A[i], B[i]))
            count++
    }
    return count;
}

function primeMatch(N, M) {
    var check = false;
    var a = N;
    var b = M;
    var c = 0;
    var d = getGCD(a, b);

    while (c != 1) {
        c = getGCD(a, d);
        a /= c;
    }

    c = 0;
    while (c != 1) {
        c = getGCD(b, d);
        b /= c;
    }

    if (a == 1 && b == 1)
        check = true;

    return check;
}

function getGCD(a, b) {
    var result;
    if ( a % b == 0 )
        result = b;
    else
        result = getGCD(b, a % b);

    return result;

}
