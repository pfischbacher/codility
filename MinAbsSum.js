function solution(A) {
  console.log(A);
  let len = A.length;
  let sum = 0;
  let maxValue = 0;
  for (let i = 0; i < len; i++) {
    sum += Math.abs(A[i]);
    maxValue = Math.max(maxValue, Math.abs(A[i])); 
  }
  let count = Array(maxValue + 1).fill(0);
  let result = sum;

  for (let i = 0; i < len; i++) {
    count[Math.abs(A[i])]++;
  }
  
  let dp = Array(sum + 1).fill(-1);
  dp[0] = 0;
  for (let i = 1; i <= maxValue; i++) {
    if (count[i] > 0) {
      for (let j = 0; j < sum; j++) {
        if (dp[j] >= 0) {
          dp[j] = count[i];
        } else if (j >= i && dp[j-i] > 0) {
          dp[j] = dp[j-i] - 1;
        }
      }
    }
  }

  for (let i = 0; i < Math.floor(sum / 2) + 1; i++) {
    if (dp[i] >= 0) {
      result = Math.min(result, sum - 2 * i);
    }
  }
  return result;
}

function solution_slow(A) {
  let len = A.length;
  let sum = A.reduce((a,b) => Math.abs(a) + Math.abs(b), 0);
  let result = sum;
  
  let dp = Array(sum + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < len; i++) {
    for (let j = sum; j >= 0; j--) {
      if (dp[j] == 1 && (j + Math.abs(A[i])) <= sum) {
        dp[j+ Math.abs(A[i])] = 1;
      }
    }
  }
  for (let i = 0; i < Math.floor(sum / 2) + 1; i++) {
    if (dp[i] == 1) {
      result = Math.min(result, sum - 2 * i);
    }
  }
  return result;
}



tests = [
  {
    data: {
      A: [1, 5, 2, -2]
    },
    expect: 0
  },
  {
    data: {
      A: [2, 2, 1]
    },
    expect: 1
  },
  {
    data: {
      A: [3, 3, 3, 4, 5]
    },
    expect: 0
  },
  {
    data: {
      A: [10, 11, 12, 13, 14]
    },
    expect: 6
  }
];



for (let i = 0; i < tests.length; i++) {
  let index = i + 1;
  console.log('Answer ' + index + ':', solution(tests[i].data.A ), '| Expect', tests[i].expect);
  console.log('********************************');
}
