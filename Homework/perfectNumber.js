const reducer = (previousValue, currentValue) => previousValue + currentValue;

function perfectNumbers() {
  let ans = [];
  for (let i = 1; i <= 1000; i++) {
    let arr = [];
    for (let j = 1; j < i; j++) {
      if (i % j === 0) {
        arr.push(j);
      }
    }
    if (arr.length > 0) {
      let result = arr.reduce(reducer);
      if (result === i) {
        ans.push(i);
      }
    }
  }
  console.log(...ans);
}

perfectNumbers();