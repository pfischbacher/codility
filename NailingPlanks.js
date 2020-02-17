function solution(A, B, C) {
  console.log(A, B, C);
  let beg = 1;
  let end = C.length
  let result = -1;

  while (beg <= end) {
    let mid = Math.ceil(( beg + end ) / 2);
    if (checkPlanks(A, B, C, mid)) {
      end = mid - 1;
      result = mid;
    } else {
      beg = mid + 1;
    }
  }
  return result;

}


function checkPlanks(A, B, C, count) {
  let nailsMarked = new Array(2 * C.length + 1).fill(0);
  let allNailed = true;

  for (let i = 0; i < count; i++) {
    nailsMarked[C[i]] = 1;
  }
  // generate running totals so we can track the change in the number of nails over a range.
  // for example plank(1,5) is nailed when the number of nails at start and end differs,
  // i.e. there is a nail in this range

  for (let i = 1; i < nailsMarked.length; i++) {
    nailsMarked[i] += nailsMarked[i - 1];
  }

  for (let i = 0; i < A.length && allNailed; i++) {
    allNailed = nailsMarked[B[i]] - nailsMarked[A[i] - 1] > 0 ? true : false;
  }

  return allNailed;

}



tests = [
  {
    data: {
      A:[1, 4, 5, 8],
      B:[4, 5, 9, 10],
      C:[4, 6, 7, 10, 2]
    },
    expect: 4
  }
];

for (let i = 0; i < tests.length; i++) {
  let index = i + 1;
  console.log('Answer ' + index + ':', solution(tests[i].data.A, tests[i].data.B, tests[i].data.C), '| Expect', tests[i].expect);
  console.log('********************************');
}
