function solution(N) {
    var cnt = 0, i = 1;
    var limit = N;
    if ( N == 1 )
        cnt++;
    else {
        while (i < limit) {
            if ( N % i == 0 )
                cnt += 2;
            if ( N / i == i)
                cnt--;
                
            limit = Math.floor( N / i);
            i++;
        }
    }
    
    return cnt;
}
