function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a,b) => a - b)
  let sum = numbers[0] + numbers[1];
  return sum
}
sumTwoSmallestNumbers([34,12,43,100,67,89])