function solution(A) {
  const len = A.length;

  const ASorted = A.sort((a,b) => a - b);
  console.log(ASorted);
  let start = 0;
  let end = A.length-1;
  let result = Math.min(Math.abs(ASorted[start] * 2), Math.abs(ASorted[end] * 2));

  while (start <= end) {
    result = Math.min(result, Math.abs(ASorted[start] + ASorted[end]));
    if (Math.abs(ASorted[start]) > Math.abs(ASorted[end]) ) {
      start++;
    }else {
      end--;
    }
    if (result == 0) {
      return 0;
    }
  }
  return result;

}

const tests = [
  {
    data:[1, 4, -3],
    expect: 1
  },
  {
    data:[-8, 4, 5, -10, 3],
    expect: 3
  },
  {
    data:[5, 4, 8, 3, -8, -10, 8],
    expect: 0
  },
  {
    data:[8, 4, 5, 10, 3],
    expect: 6
  },
  {
    data:[10, 8, 5, 4, 3],
    expect: 6
  }
];

for (let i = 0; i < tests.length; i++) {
  let index = i + 1;
  console.log('Answer ' + index + ':', solution(tests[i].data), '| Expect', tests[i].expect);
  console.log('********************************');
}




function solution_old(A) {
  const len = A.length;

  const ASorted = A.sort((a,b) => b - a);
  console.log(ASorted);
  let start = 0;
  let end = len - 1;
  let result = Math.abs(ASorted[0] * 2);

  while (start < end) {
    result = Math.min(result, Math.abs(ASorted[start] + ASorted[end]));
    if (ASorted[start] - ASorted[start + 1] < ASorted[end] - ASorted[end - 1]) {
      start++;
    } else {
      end--;
    }
  }
  return result;

}

function solution_81(A) {
  const len = A.length;

  const ASorted = A.sort((a,b) => Math.abs(a) - Math.abs(b));
  console.log(ASorted);
  let start = 0;
  let end = 0;
  let result = Math.abs(ASorted[0] * 2);

  while (start < len) {
    let diff = Math.abs(ASorted[start] + ASorted[end]);
    console.log('Start:' + start, 'End:' + end, 'ASorted[start]:' + ASorted[start], 'ASorted[end]:' + ASorted[end] );
    console.log('Start:' + start, 'End:' + end);
    if (ASorted[end] > 0 && ASorted[end] > ASorted[end + 1] ) {
      end++;
    } else if (ASorted[end] < 0 && ASorted[end] < ASorted[end + 1] ) {
      end++;
    }else {
      start++;
      end = start;
    }
    console.log('Diff:' + diff);
    result = Math.min(result, diff);
    if (result == 0) {
      return 0;
    }
  }
  return result;

}
