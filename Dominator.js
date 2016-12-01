function solution(A) {
    var counts = {};
    for (var i = 0; i < A.length; i++) {
        if (counts.hasOwnProperty(A[i]))
            counts[A[i]]++;
        else
            counts[A[i]] = 1;
        if (counts[A[i]] > Math.floor(A.length/2) )
            return i;
    }
    
    return -1;
}
