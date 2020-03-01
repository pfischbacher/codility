
function solution(A) {
  let len = A.length;
  let d = 6;
  let dp = Array(6).fill(A[0]);  // Just need to hold the last 6 numbers.
  for (let i = 1; i <= len; i++) {
    dp[i % d] = Math.max(...dp) + A[i];
  }
  return dp[(len - 1) % d];

}

tests = [
  {
    data: {
      A: [1, -2, 0, 9, -1, -2]
    },
    expect: 8
  },
  {
    data: {
      A: [1, 22, -1, -1, -1, -2, -1, -1, -1, -1, -1, 5]
    },
    expect: 27
  }
];


for (let i = 0; i < tests.length; i++) {
  let index = i + 1;
  console.log('Answer ' + index + ':', solution(tests[i].data.A ), '| Expect', tests[i].expect);
  console.log('********************************');
}
