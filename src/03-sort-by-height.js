/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr2 = Array.from(arr);
  arr2 = arr2.filter((x) => x !== -1);
  arr2 = arr2.sort((a, b) => a - b);
  const res = [];
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      res.push(-1);
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  return res;
}

module.exports = sortByHeight;
