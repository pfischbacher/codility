function solution(S, P, Q) {
    var results = [], i = 0;
    S = S.replace(/A/g, 1);
    S = S.replace(/C/g, 2);
    S = S.replace(/G/g, 3);
    S = S.replace(/T/g, 4);
    
    var cum_impact_factors = [0,0,0,0];
    var cum_impact_factors_arr = [];
    cum_impact_factors_arr.push(cum_impact_factors);
    // Add the factors cumulative values to an array 
    for(i = 0; i < S.length; i++) {
        cum_impact_factors = cum_impact_factors.concat(); //Need to make a copy to avoid pushing just a reference of this array.
        cum_impact_factors[S[i]-1]++;
        cum_impact_factors_arr.push(cum_impact_factors);
    }
    
    for(i = 0; i < P.length; i++) {
        var min = 0;
        result = 0;
        for (j = 0; j < 4; j++) {
            min = cum_impact_factors_arr[Q[i]+1][j] - cum_impact_factors_arr[P[i]][j];
            if (min > 0) {
                result = j + 1;
                break;
            }
        }
            
        results.push(result);
    }
    
    return results;
}
