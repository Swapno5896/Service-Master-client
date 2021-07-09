const rootUrl = 'https://murmuring-fjord-79691.herokuapp.com'
export function getProduct() {
  return fetch(rootUrl + '/getProduct')
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}

export function getPortfolio() {
  return fetch(rootUrl + '/getPortfolio')
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}

export function getBlog() {
  return fetch(rootUrl + '/getBlog')
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}
