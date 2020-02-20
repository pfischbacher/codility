function solution(A) {
  const len = A.length;
  const ASorted = A.sort((a,b) => b - a);
  console.log(ASorted);
  let mid = 0;
  let end = 0;
  let result = 0;

  for (let start = 0; start < len - 2; start++) {
    mid = start + 1;
    end = len - 1;
    while (mid < end) {
      if (ASorted[mid] + ASorted[end] > A[start]) {
        result += end - mid;
        mid++;
      } else {
        end--;
      }
    }
  }
  return result;
}

const tests = [
  {
    data:[10, 2, 5, 1, 8, 12],
    expect: 4
  }
];

for (let i = 0; i < tests.length; i++) {
  let index = i + 1;
  console.log('Answer ' + index + ':', solution(tests[i].data), '| Expect', tests[i].expect);
  console.log('********************************');
}
