function solution(A) {
  let left = 0;
  let bottom = 1;
  let len = A.length;
  let depth = 0;

  if (len > 2) {
    for (let i = 1; i < len; i++) {
      if (A[i] <= A[bottom]) {
        bottom = i;
      }
      if (A[i] > A[bottom] && A[left] > A[bottom]) {
        //console.log(left, i, bottom);
        //console.log('LEFT: ' + A[left], ' | i: ' + A[i], ' | Bottom: ' + A[bottom]);
        depth = Math.max(depth, Math.min(A[left], A[i]) - A[bottom]);
      }
      if (A[i] >= A[left]) {
        left = i;
        bottom = i + 1;
      }
    }
  }
  return depth;
}

const tests = [
  {
    data:[1, 3, 2, 1, 2, 1, 5, 3, 3, 4, 2],
    expect: 2
  },
  {
    data:[5, 8],
    expect: 0
  },
  {
    data: [2, 1, 3],
    expect: 1
  },
  {
    data: [3, 1, 2],
    expect: 1
  }
];

for (let i = 0; i < tests.length; i++) {
  let index = i + 1;
  console.log('Answer ' + index + ':', solution(tests[i].data), '| Expect', tests[i].expect);
  console.log('********************************');
}
