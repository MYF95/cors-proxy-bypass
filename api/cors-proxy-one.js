'use strict';
const axios = require('axios');

module.exports.handler = async event => {
  console.log('Lambda function starting...');
  
  let url = '';

  if (event.queryStringParameters && event.queryStringParameters.url) {
    console.log("Received url: " + event.queryStringParameters.url);
    url = event.queryStringParameters.url;
  }

  try {
    console.log(`Connection to ${url} was successful...`);
    const res = await axios.get(url, {});
    console.log(`Resulting data: ${JSON.stringify(res.data)}`);
    return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(res.data)
    };
  } catch (e) {
    console.log(e);
    return {
        statusCode: 400,
        body: JSON.stringify(e)
    };
  }
};