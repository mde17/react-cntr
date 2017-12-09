import 'whatwg-fetch';

const BASE_URL = 'http://localhost:3000/api/v1/';

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default function request(url, options) {
  return fetch(`${BASE_URL}${url}`, options)
    .then(checkStatus)
    .then(parseJSON);
}
