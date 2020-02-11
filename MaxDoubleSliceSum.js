// https://stackoverflow.com/questions/20660989/max-double-slice-sum

function solution(A) {
  let max_ending = new Array(A.length).fill(0);
  let max_starting = new Array(A.length).fill(0);
  let max_double_slice = 0;

  for (let i = 1; i < A.length - 1; i++) {
    max_ending[i] = Math.max(0, max_ending[i - 1] + A[i]);
  }
  
  for (let i = A.length - 2; i > 0; i--) {
    max_starting[i] = Math.max(0, max_starting[i+1] + A[i]);
  }

  for (let i = 1; i < A.length - 1; i++) {
    max_double_slice = Math.max(max_double_slice, max_ending[i-1] + max_starting[i+1]);
  }

  return max_double_slice;

}

// Combing End and Start slices into a single for loop.
function solution2(A) {
  let max_ending = new Array(A.length).fill(0);
  let max_starting = new Array(A.length).fill(0);
  let max_double_slice = 0;

  for (let i = 1; i < A.length - 1; i++) {
    max_ending[i] = Math.max(0, max_ending[i - 1] + A[i]);
    let j = A.length - 1 - i; 
    max_starting[j] = Math.max(0, max_starting[j+1] + A[j]);
  }

  for (let i = 1; i < A.length - 1; i++) {
    max_double_slice = Math.max(max_double_slice, max_ending[i-1] + max_starting[i+1]);
  }

  return max_double_slice;

}
const tests = [
  {
    data:[3, 2, 6, -1, 4, 5, -1, 2],
    expect: 17
  },
  {
    data:[5, 5, 5],
    expect: 0
  },
  {
    data:[6, 1, 5, 6, 4, 2, 9, 4],
    expect: 26
  },
  {
    data:[10, 100, 200, 5],
    expect: 200
  },
  {
    data:[5, 17, 0, 3],
    expect: 17
  },
  {
    data:[-2, -3, -4, 1, -5, -6, -7],
    expect: 1
  }
];

for (let i = 0; i < tests.length; i++) {
  let index = i + 1;
  console.log('Answer ' + index + ':', solution(tests[i].data), '| Expect', tests[i].expect);
  console.log('********************************');
}
