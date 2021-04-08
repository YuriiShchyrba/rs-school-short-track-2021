/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const str = n.split('-');
  if (str.length !== 6) return false;
  const obj = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    A: true,
    B: true,
    C: true,
    D: true,
    E: true,
    F: true,
  };
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i][0]] || !obj[str[i][0]]) return false;
  }
  return true;
}

module.exports = isMAC48Address;
