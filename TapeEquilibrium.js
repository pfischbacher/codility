function solution(A) {
    val_1 = 0;
    val_2 = 0; 
    
    for (j=0; j<A.length; j++)
        val_2 += A[j];
    
    min = Math.abs(A[0] - (val_2 - A[0]) );
    
    if (A.length > 1 ) {
        for (P = 1; P < A.length; P++) {
            val_1 = val_1 + A[P-1];
            val_2 = val_2 - A[P-1];
            diff = Math.abs(val_1 - val_2);
            
            if (min > diff )
                min = diff;
        }
    }
    return min;
}
