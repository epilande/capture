/**
 * Validate URL
 * @param {string} url Website URL
 * @returns {boolean} Url is valid or not
 */
export function validUrl(url) {
  const protocol = '^((http(s)?(:\\/\\/))?(www\\.)?\\b)?';
  const domain = '[-a-zA-Z0-9@:%._\\+~#=]{2,256}';
  const tld = '((\\.|\\:)([a-z]{2,6}|\\d))';
  const params = '(\\/[\\/\\d\\w\\.-]*)*([-a-zA-Z0-9:%()_\\+.~#?&//=]*)$';
  const pattern = new RegExp(protocol + domain + tld + params, 'i');

  return pattern.test(url);
}
