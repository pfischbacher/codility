function solution(A) {
  // This doesn't use the caterpillar method.
  const len = A.length;
  let values = new Array();
  let result = 0;

  for (let i = 0; i < len; i++) {
    let value = Math.abs(A[i]);
    if (! values[value] ) {
      values[value] = 1;
      result++;
    }
  }

  return result;
}


const tests = [
  {
    data:[-5, -3, 1, 0, 3, 6],
    expect: 5
  }
];

for (let i = 0; i < tests.length; i++) {
  let index = i + 1;
  console.log('Answer ' + index + ':', solution(tests[i].data), '| Expect', tests[i].expect);
  console.log('********************************');
}
