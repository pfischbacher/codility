function solution(A, B) {
  const len = A.length;
  let end = -1;
  let result = 0;

  for (let i = 0; i < len; i++) {
    if ( A[i] > end ) {
      result++;
      end = B[i];
    }
  }
  return result;

}

tests = [
  {
    data: {
      A:[1, 3, 7, 9, 9],
      B:[5, 6, 8, 9, 10]
    },
    expect: 3
  }
];

for (let i = 0; i < tests.length; i++) {
  let index = i + 1;
  console.log('Answer ' + index + ':', solution(tests[i].data.A, tests[i].data.B), '| Expect', tests[i].expect);
  console.log('********************************');
}
