function friendlyNumber(x, y) {
    let arrx = [];
    let arry = [];
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
  
    for (let i = 1; i < x; i++) {
      if (x % i === 0) {
        arrx.push(i);
      }
    }
    for (let i = 1; i < y; i++) {
      if (y % i === 0) {
        arry.push(i);
      }
    }
  
    if (arrx.length > 0 && arry.length > 0) {
      let resx = arrx.reduce(reducer);
      let resy = arry.reduce(reducer);
      if (resx === y && resy === x) {
        console.log("Girilen sayılar arkadaş sayıdır.");
      } else {
        console.log("Girilen sayılar arkadaş sayı değildir.");
      }
    } else {
      console.log("Girilen sayılar arkadaş sayı değildir.");
    }
  }
  
  friendlyNumber(220, 284);