function solution(K, M, A) {
  // M is a red herring, it is misleading!
  
  let len = A.length;
  let beg = Math.max(...A);
  let end = A.reduce(function(a, b){
      return a + b;
  }, 0);
  let mid = 0;

  while (beg <= end) {
    mid = Math.ceil(( beg + end ) / 2);
    if (check(A, mid, K) ) {
      end = mid - 1;
    } else {
      beg = mid + 1;
    }
  }
  return beg;
}

function check(A, max, K) {
  let n = A.length;
  let sum = 0;
  let blocks = 1;
  for (let i = 0; i < n; i++) {
    if (sum + A[i] <= max) {
      sum += A[i]
    } else {
      sum = A[i];
      blocks++;
    }
  }
  if (blocks <= K) {
    return true;
  } else {
    return false;
  }
}

const tests = [
  {
    data: {
      K: 3,
      M: 5,
      A:[2, 1, 5, 1, 2, 2, 2]
    },
    expect: 6
  },
  {
    data: {
      K: 1,
      M: 1,
      A:[0]
    },
    expect: 0
  },
  {
    data: {
      K: 3,
      M: 5,
      A:[5,3]
    },
    expect: 5
  }
];

for (let i = 0; i < tests.length; i++) {
  let index = i + 1;
  console.log('Answer ' + index + ':', solution(tests[i].data.K, tests[i].data.M, tests[i].data.A), '| Expect', tests[i].expect);
  console.log('********************************');
}
