function solution(S) {
    bracketStack = [];
    for (var i = 0; i < S.length; i++) {
        if (S[i] == "(")
            bracketStack.push(1);
        else if (bracketStack.length > 0)
            bracketStack.pop();       
        else
            return 0;
    }
    
    return bracketStack.length == 0 ? 1 : 0;
}
