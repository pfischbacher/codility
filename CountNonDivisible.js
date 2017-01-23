function solution(A) {
    var result = [];
    var m = 1;
    var N = A.length;
    var C = {};
    var D = {};

    //console.log(N);
    // Fill the C object which acts as a hashtable to contain number of non divisibles for each value in array A.
    // Default value is the number of values in A minus 1.  Reduce by one for each double value.
    // To keep track of each value that occurs more than once, we create an object D that reduces each value in object C based on the number of occurances.
    for (var i = 0; i < N; i++) {
        if (C.hasOwnProperty(A[i])) {
            C[A[i]]--;
            D[A[i]]++;
        } else {
            C[A[i]] = N - 1;
            D[A[i]] = 1;
        }
    }
        // Using the Sieve of Eratosthenes method to reduce the number of non-divisibles in each corresponding C array value.
    while ( m <= 2 * N) {
        if (C.hasOwnProperty(m)) {
            var k = m + m;
            while ( k <= 2 * N ) {
                if (C.hasOwnProperty(k)) {
                    C[k] -= D[m];
                }
                k += m;
            }
        }

        m++;
    }

    for (var j = 0; j < N; j++)
        if (C.hasOwnProperty(A[j]) )
            result.push(C[A[j]]);

    return result;
}

