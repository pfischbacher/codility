function solution(X, A) {
    
    result = -1;
    i = 0;
    goal = X;
    B = [];
    
    for (j = 1; j <= X; j++) {
        B[j-1] = 0;
    }
    
    while( result === -1 && i < A.length ) {
        if (A[i] <= X) {
            if (B[A[i]-1] == 0) { 
                goal--;
                B[A[i]-1] = 1;
            }
            if (goal === 0) {
                result = i;
                break;
            }
        }
        i++;
    }
    
    return result;
}
