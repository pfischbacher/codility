// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    b_num = (N >>> 0).toString(2);
    
    max = 0;
    cnt = 0;
    
    for (i = 0; i < b_num.length; i++) {
        if (b_num[i] == 0 )
            cnt++;
        else {
            if (cnt > max)
                max = cnt;
            cnt = 0;
        }
    }
    
    return max;
}
