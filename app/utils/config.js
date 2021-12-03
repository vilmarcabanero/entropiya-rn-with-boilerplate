const API = {
  SERVER: {
    WEBSERVICES: {
      TYPE: 'HTTP',
      OPTIONS: {
        baseURL: 'https://jsonplaceholder.typicode.com',
        headers: {
          // 'Cache-Control': 'no-cache',
        },
        timeout: 50000,
      },
    },
  },
};

module.exports = {
  API,
};
