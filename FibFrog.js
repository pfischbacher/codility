function getFibonacciSet(n) {
  let fib = [1,2];
  for (let i = 2; fib[i-1] <= n; i++ ) {
    fib[i] = fib[i-1] + fib[i-2];
  }
  console.log('Fibonacci', fib);
  return fib;
}

function solution(A) {
  let len = A.length;
  A[len] = 1;
  len++;
  let fib = getFibonacciSet(len);
  let jumps = [];
  const reachable = new Array(len).fill(-1);

  for (let i = 0; fib[i] <= len; i++) {
    reachable[fib[i]-1] = 1;
  }

  for (let i = 0; i < len; i++) {
    if (A[i] == 1 && reachable[i] > 0 ) {
      for (let j = 0; fib[j] <= len-i; j++) {
        if (reachable[i + fib[j]] < 0 || reachable[i + fib[j]] > reachable[i] + 1) {
          reachable[i + fib[j]] = reachable[i] + 1;
        }
      }
    }
  }
  return reachable[len-1];
}


const tests = [
  {
    data:[0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
    expect: 3
  },
  {
    data:[1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    expect: 1
  }
];

for (let i = 0; i < tests.length; i++) {
  let index = i + 1;
  console.log('Answer ' + index + ':', solution(tests[i].data), '| Expect', tests[i].expect);
  console.log('********************************');
}
