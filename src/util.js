const crypto = require('crypto');

/**
 * 生成 x-sign header
 * `x-sign: 'X' + md5(url + 'WSUDD')`
 * @param {string} url url
 * @param {object} params 参数
 */
function generateXSign(url, params = {}) {
  const searchString = new URLSearchParams(params).toString();
  const realUrl = `${url}${searchString ? '?' : ''}${searchString}WSUDD`;
  const md5 = crypto.createHash('md5').update(realUrl).digest('hex');
  return `X${md5}`;
}

module.exports = {
  generateXSign,
};
