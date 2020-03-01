function solution(C, k) {
  let len = C.length;
  let dp = Array(k+1).fill(k + 10);
  dp[0] = 0;
  let tmp = [];
  //console.log(dp);
  for (let i = 0; i <= k; i++) {
    tmp[i] = i;
  }

  for (let i = 1; i <= len; i++) {
    for (let j = C[i - 1]; j <= k; j++) {
      dp[j] = Math.min(dp[j], dp[j - C[i-1]] +1);
      console.log('dp[j-C[i-1]]:' + dp[j - C[i-1]]);
      console.log('dp[j]:' + dp[j]);
    }
  }
  console.log(tmp);
  console.log(C);
  console.log(dp);
  return dp;
}



tests = [
  {
    data: {
      k: 6,
      C: [1, 3]
    },
    expect: [0, 1, 2, 1, 2, 3, 2]
  },
  {
    data: {
      k: 6,
      C: [1, 3, 4]
    },
    expect: [0, 1, 2, 1, 1, 2, 2]
  }
];



for (let i = 0; i < tests.length; i++) {
  let index = i + 1;
  console.log('Answer ' + index + ':', solution(tests[i].data.C, tests[i].data.k), '| Expect', tests[i].expect);
  console.log('********************************');
}
