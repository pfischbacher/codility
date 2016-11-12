/*
Referenced this website to understand why the max length of the slice will be no longer than 3.
Hence j <= i + 2
https://codesays.com/2014/solution-to-min-avg-two-slice-by-codility/
*/

function solution(A) {
    var cum_A = [0];
    var cum_value = 0;
    var min_average = 10001;
    var start_position = 0;
    for(i = 0; i < A.length; i++) {
        cum_value += A[i];
        cum_A.push(cum_value);
    }
    
    for(i = 1; i < cum_A.length; i++) {
        for (j = i + 1; j <= i + 2 && j < cum_A.length; j++) {
            average = (cum_A[j] - cum_A[i-1])/(j-i+1);
            if (average < min_average ) {
                min_average = average;
                start_position = i - 1;
            }
        }
    }
    
    return start_position;
    
}
