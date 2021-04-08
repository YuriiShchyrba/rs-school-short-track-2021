/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  if (!str.length) return '';
  for (let i = 0; i < str.length; i++) {
    let sum = 1;
    while (str[i + 1] === str[i]) {
      sum++;
      i++;
    }
    if (sum > 1) {
      res += sum;
    }
    res += str[i];
  }
  return res;
}

module.exports = encodeLine;
