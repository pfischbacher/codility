function solution(A) {
    var peaks = 0;
    var absMaxPeaks = Math.ceil(Math.sqrt(A.length));
    var maxPeaks = 0;
    
    for (var i = 1; i <= absMaxPeaks; i++) {
        peaks = 0;
        for (var j = 1; j < A.length; j++) {
            if (A[j-1] < A[j] && A[j] > A[j + 1]) {
                peaks++;
                if (peaks == i)
                    break;
                j += i - 1;
            }
        }
        if (peaks == 0)
            break;
            
        maxPeaks = maxPeaks < peaks ? peaks : maxPeaks;
    }
    
    return maxPeaks;
}
