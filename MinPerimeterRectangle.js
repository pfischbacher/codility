function solution(N) {
    var A = -1;
    var i = Math.ceil(Math.sqrt(N));
    while ( i > 0 && A == -1) {
        if ( N % i == 0 ) {
            A = i;
        }
        i--;   
    }
    
    return 2 * ( A + N / A);
}
