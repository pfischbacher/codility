function solution(K, A) {
  let len = A.length;
  let result = 0;
  let i = 0;
  let ropeLength = 0;

  while ( i < len ) {
    ropeLength += A[i];
    if (ropeLength >= K) {
      result++;
      i++;
      ropeLength = 0;
    } else {
      i++;
    }
  }
  return result;
}


const tests = [
  {
    data: {
      A: [1, 2, 3, 4, 1, 1, 3],
      K: 4
    },
    expect: 3
  },
  {
    data: {
      A: [1],
      K: 1
    },
    expect: 1
  },
  {
    data: {
      A: [1, 1],
      K: 3
    },
    expect: 0
  }
];

for (let i = 0; i < tests.length; i++) {
  let index = i + 1;
  console.log('Answer ' + index + ':', solution(tests[i].data.K, tests[i].data.A), '| Expect', tests[i].expect);
  console.log('********************************');
}
