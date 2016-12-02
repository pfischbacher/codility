function solution(A) {
    var equiCount = 0;
    var leaders = [];
    var leader = null;
    var forwardCount = 0, reverseCount = 0;
    var leaderCounts = [], revLeaderCounts = [];
    var counts = {}; 
    
    for (var i = 0; i < A.length; i++) {
        leaders.push(0);
        if (counts.hasOwnProperty(A[i]) )
            counts[A[i]]++;
        else
            counts[A[i]] = 1;
        if (counts[A[i]] > Math.floor(A.length / 2) ) {
            leader = A[i];
        }
    }
    
    if (leader != null) {
        for (var i = 0; i < A.length - 1; i++) {
            if (A[i] == leader)
                forwardCount++;
                
            if (A[A.length - 1 - i] == leader)
                reverseCount++;
             
            if ( forwardCount > Math.floor((i+1)/2) ) {
                leaders[i]++;
                if (leaders[i] === 2 ) {
                    equiCount++;
                }
            }
            
            if (reverseCount > Math.floor((i+1)/2) ) {
                leaders[A.length - i - 2]++;
                if (leaders[A.length - i - 2] === 2 ) {
                    equiCount++;
                }
            }
        }
    }
    
    return equiCount;
}
