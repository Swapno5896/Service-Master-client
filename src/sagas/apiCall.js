export function getProduct() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}

export function getPortfolio() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}

export function getBlog() {
  return fetch("https://cryptic-chamber-61162.herokuapp.com/getBlog")
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}
