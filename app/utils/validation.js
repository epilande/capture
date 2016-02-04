/**
 * Validate URL
 * @param {string} url Website URL
 * @returns {boolean} Url is valid or not
 */
export function validUrl(url) {
  const patterns = {
    protocol: '^(http(s)?(:\/\/))?(www\.)?',
    domain: '[a-zA-Z0-9-_\.]+',
    tld: '(\.[a-zA-Z0-9]{2,})',
    params: '([-a-zA-Z0-9:%_\+.~#?&//=]*)'
  };
  const { protocol, domain, tld, params } = patterns;
  const pattern = new RegExp(protocol + domain + tld + params, 'i');

  return pattern.test(url);
}
