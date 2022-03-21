let isPrime;

function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    isPrime = true;
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j === 0) {
        isPrime = false;
        console.log(numbers[i] + " sayısı asal sayı değildir.");
        break;
      }
    }
    if (isPrime === true) {
      console.log(numbers[i] + " sayısı asal sayıdır.");
    }
  }
}

findPrime(3, 8, 34, 23, 11);