function primeNumbers() {
    let result = []
    for (let i = 2; i < 1000; i++) {
      isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime === true) {
        result.push(i)
      }
    }
    console.log(...result)
  }

  primeNumbers()