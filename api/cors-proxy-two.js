'use strict';
const axios = require('axios');

module.exports.handler = async event => {
  console.log('Lambda function starting...');
  
  let url = '';
  let response = '';
  
  if (event.queryStringParameters && event.queryStringParameters.url) {
    console.log("Received url: " + event.queryStringParameters.url);
    url = event.queryStringParameters.url;
  }
  
  await axios.get(url)
    .then(res => {
      console.log('Data obtained: ' + JSON.stringify(res.data));
      response = res.data;
    })
    .catch(err => {
      console.log(err);
    });
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(response)
  };
};