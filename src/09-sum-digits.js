/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let number = n;
  while (number > 9) {
    const arr = number.toString().split('').map((x) => +x).reduce((acc, val) => acc + val);
    number = arr;
  }
  return number;
}

module.exports = getSumOfDigits;
