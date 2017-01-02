function solution(A) {
    var maxBlocks = 1;
    var value = 0;
    var peaksArray = [];
    var blockSize = 0;
    var result = 0;
    
    for (var i = 1; i < A.length - 1; i++) {
        if (A[i-1] < A[i] && A[i] > A[i + 1]) {
            peaksArray.push(i);
        }
        if ( i >= 3 && maxBlocks == 1)
            if ( A.length % i == 0) 
                 maxBlocks = A.length / i;       
    }
    
    var peaksArrayLength = peaksArray.length;
    var limit = Math.min(peaksArrayLength, maxBlocks);
    
    for (var j = limit; j > 0; j--) {
        var ok = false;
        var lastPeak = 0;
        if (A.length % j == 0) {
            blockSize = A.length / j;
            for (var k = 0; k < j; k++) {
                ok = false;
                for (var m = lastPeak; m < peaksArrayLength; m++) {
                    if ( peaksArray[m] > k * blockSize - 1 ) {
                        if ( peaksArray[m] < (k + 1) * blockSize ) {
                            ok = true;
                            lastPeak = m;
                        }
                        break;
                        
                    }
                }
                if ( ! ok ) {
                    break;
                }
            }
            if ( ok ) {
                result = j;
                break;
            }
        }
    }
    return Math.min(peaksArrayLength, result);
}
