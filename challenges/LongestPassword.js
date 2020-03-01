function solution(S) {
  let result = -1;
  let words = S.split(/\s+/);
  for (word of words) {
    if (word.match(/^[a-z, A-Z, 0-9]+$/)) {
      let digits = word.match(/(\d+)/g) || [];
      let letters = word.match(/([a-zA-Z]+)/g) || [];
      if (letters.join('').length % 2 === 0 && digits.join('').length % 2 != 0){
        result = Math.max(result, word.length);
      }
    }
  }
  return result;
}


tests = [
  {
    data: {
      A: "test 5 a0A pass007     ?xy1"
    },
    expect: 7
  },
  {
    data: {
      A: "?????? 555a55ga2343 a0A pass007     ?xy1"
    },
    expect: 7
  },
  {
    data: {
      A: "a"
    },
    expect: -1
  },
  {
    data: {
      A: "zxcasdqwe123"
    },
    expect: -1
  },
  {
    data: {
      A: "0"
    },
    expect: 1
  }

];

for (let i = 0; i < tests.length; i++) {
  let index = i + 1;
  console.log('Answer ' + index + ':', solution(tests[i].data.A ), '| Expect', tests[i].expect);
  console.log('********************************');
}
