function solution(S) {
    var bracketStack = [];
    var brackets = { "{":"}", "[":"]", "(": ")" };
    for (var i = 0; i < S.length; i++) {
        if (S[i] == "{" || S[i] == "[" || S[i] == "(")
            bracketStack.push(S[i]);
        if (S[i] == "}" || S[i] == "]" || S[i] == ")") {
            if (brackets[bracketStack[bracketStack.length - 1]] == S[i]) {
                bracketStack.pop();
            }
            else {
                return 0;
                break;
            }
        }
    }
    return bracketStack.length == 0 ? 1 : 0;
}
