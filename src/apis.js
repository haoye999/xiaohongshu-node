const axios = require('axios');
const { generateXSign } = require('./util');

const host = 'https://www.xiaohongshu.com';

exports.getHomeFeed = async function getHomeFeed(params) {
  const url = '/wx_mp_api/sns/v1/homefeed';
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

exports.getNoteDetail = async function getNoteDetail(id) {
  const url = `/wx_mp_api/sns/v1/note/${id}/single_feed`;
  const res = await axios({
    url: host + url,
    method: 'GET',
    headers: {
      authorization: 'f38d4bc0-18c7-4595-80ba-d70313c0045f',
    },
  });

  return res.data;
};

exports.getUserDetail = async function getHomeFeed(id) {
  const url = `/fe_api/burdock/v1/user/${id}`;
  const res = await axios({
    url: host + url,
    method: 'GET',
    headers: {
      'x-sign': generateXSign(url),
    },
  });

  return res.data;
};
