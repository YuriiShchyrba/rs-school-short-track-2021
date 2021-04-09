/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dot = '.';
  const obj = {};
  const dom = domains.map((x) => x.split('.').reverse());
  for (let i = 0; i < dom.length; i++) {
    let str = '';
    for (let j = 0; j < dom[i].length; j++) {
      str += dot + dom[i][j];
      obj[str] = obj[str] ? obj[str] + 1 : 1;
    }
  }
  return obj;
}

module.exports = getDNSStats;
