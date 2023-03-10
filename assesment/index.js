const axios = require('axios');
require('dotenv').config()

const BEARER_TOKEN = ''

const MERAKI_JWT = '';

const tableName = 'assesments';
const assesId = 83;

const postBaseURL = 'http://merd-strapi.merakilearn.org/api';
const getBaseURL = 'putMerakilApiUrlHere';

const merakiAssesConv = async (assesId) => {
  const coData = await axios.get(`${getBaseURL}/assessment/${assesId}`, {
    headers: {
      'version-code': 5050505,
      Authorization: `Bearer ${MERAKI_JWT}`
    },
  });

  const allAssesments = coData.data
  const strapiFormat = {
    "name": allAssesments.name,
    "content": {
      "time": Date.now(),
      "blocks": allAssesments.content
    },
    "version": "2.23.2"
  }
  // const res = await postData(strapiFormat)
  // console.log(res)
}

const postData = async (data) => {
  const res = await axios
    .post(`${postBaseURL}/${tableName}`, data, {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    })
  return res
}


// merakiAssesConv(assesId);
