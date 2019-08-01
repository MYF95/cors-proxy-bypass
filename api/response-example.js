module.exports.handler = async event => {
  let url = '';
  let responseCode = 200;
  console.log("request: " + JSON.stringify(event));
  
  if (event.queryStringParameters && event.queryStringParameters.url) {
      console.log("Received url: " + event.queryStringParameters.url);
      url = event.queryStringParameters.url;
  }
    
  let responseBody = {
    apiResponse: url
  };
  
  let response = {
    statusCode: responseCode,
    body: JSON.stringify(responseBody)
  };
  
  return response;
}