import axios from 'axios';

const apiUrl = 'http://localhost:3000';

export async function getComparisons() {
  return await axios.get(apiUrl + '/comparisons');
}

export async function reanalyse() {
  return await axios
    .get(apiUrl + '/reanalyse')
    .then(response => delayResponse(response));
}

function delayResponse(response) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => reject(response), 5000);
  });
}
