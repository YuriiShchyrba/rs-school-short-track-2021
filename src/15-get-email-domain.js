/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr = email.split('');
  const ind = email.lastIndexOf('@') + 1;
  arr = arr.splice(ind);
  return arr.join('');
}

module.exports = getEmailDomain;
