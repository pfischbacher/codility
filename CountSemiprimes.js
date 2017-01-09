function solution(N, P, Q) { 
    var results = [];
    var semiPrimesCountArray = semiPrimesCount(N);

    for (var i = 0; i < P.length; i++) {
        results.push( semiPrimesCountArray[Q[i]] - semiPrimesCountArray[P[i]-1] );
    }
  
    return results;
}

function semiPrimesCount(n) {
    var sieve = [];
    var results = [];
    var count = 0;
    
    results.push(0);
    results.push(0);
    
    for (var i = 0; i <= n; i++)
        sieve.push(0);

    var j = 2;
    while (j <= n) {
        if ( j * j <= n)
            sieve[j * j] = j;
        if (sieve[j] == 0 ) {
            var k = j + j;
            while (k <= n) {   
                if ( sieve[k] > 1 ) {
                    if ( sieve[k] * j == k )
                        sieve[k] = 1;
                    else
                        sieve[k] = -1;
                } else
                    sieve[k] = j;
                k += j; 
            }
        }
        if ( sieve[j] == 1 ) 
            count++;
        results.push(count);
        j++;

    }
    return results;
} 
