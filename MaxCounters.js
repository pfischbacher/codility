function solution(N, A) {
    var max = 0;
    var last = 0;
    var cnt = new Array(N);
    for (var i = 0; i < N;) cnt[i++] = max;
    
    for (i = 0; i < A.length; i++) {
        if (A[i] > N) {
            last = max;
            //cnt[A[i]-1] = max; 
        } else {
            cnt[A[i]-1] = cnt[A[i]-1] < last ? last + 1 : cnt[A[i]-1] + 1;
            max = cnt[A[i]-1] > max ? cnt[A[i]-1] : max;
        }
    }
    
    for (var j = 0; j < N; j++) cnt[j] = cnt[j] < last ? last : cnt[j];
    
    return cnt;
}
