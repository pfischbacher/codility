function solution(A, B) {
    // write your code in JavaScript (Node.js 6.4.0)
    var upstreamStack = [], downstreamStack  = [];
    
    for (var i = 0; i < A.length; i++) {
        if (B[i] == 0) {
            while (A[i] > downstreamStack[downstreamStack.length - 1]  && downstreamStack.length > 0) 
                downstreamStack.pop();
            
            if (downstreamStack.length == 0 ) 
                upstreamStack.push(A[i]);
            
        }    
        else
            downstreamStack.push(A[i]);
        
    }
    
    return upstreamStack.length + downstreamStack.length;
}
