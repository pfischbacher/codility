function solution(M, A) {
  console.log(A);
  const len = A.length;
  let result = len;
  let back = 0;

  console.log(len);
  while( back < len ) {
    let B = new Array();
    let front = back + 1;
    ok = true;
    B[A[back]] = 1;
    while (front < A.length && ok) {
      console.log(front, back, B[A[front]]);
      if (! B[A[front]]) {
        //result += front - back;
        result++;
        if (result >= 1000000000) {
          return 1000000000;
        }
        B[A[front]] = 1;
        front++;
      } else {
        //back = front - 1;
        ok = false;
      }
    }
    back++;
  }

  return result;
}


const tests = [
  {
    data:{
      M: 6,
      A: [3, 4, 5, 5, 2]
    },
    expect: 9
  },
  {
    data:{
      M: 6,
      A: [ 1, 3, 4, 1, 2, 1, 3, 2, 1 ]
    },
    expect: 24
  },
  {
    data:{
      M: 6,
      A: [1, 2, 3, 4, 5, 9, 10, 4, 5]
    },
    expect: 36
  },
  {
    data:{
      M: 6,
      A: [ 2, 3, 3, 3, 2, 4, 1, 2, 5, 1, 4, 5, 1, 4 ]
    },
    expect: 37
  },
  {
    data:{
      M: 6,
      A: [1, 1]
    },
    expect: 2
  },
  {
    data:{
      M: 6,
      A: [1, 1, 5, 5, 2, 9, 10, 4, 5]
    },
    expect: 24
  },
  {
    data:{
      M: 6,
      A: [3, 4, 1, 2, 1, 3 ]
    },
    expect: 15
  }
];

for (let i = 0; i < tests.length; i++) {
  let index = i + 1;
  console.log('Answer ' + index + ':', solution(tests[i].data.M, tests[i].data.A), '| Expect', tests[i].expect);
  console.log('********************************');
}
