const axios = require('axios');
const { generateXSign } = require('./util');

const host = 'https://www.xiaohongshu.com';

exports.getHomeFeed = async function getHomeFeed(params) {
  const url = '/fe_api/burdock/v2/homefeed/notes';
  const res = await axios({
    url: host + url,
    method: 'GET',
    headers: {
      'x-sign': generateXSign(url, params),
    },
    params,
  });

  return res.data;
};
