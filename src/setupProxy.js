const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // The endpoint you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:5282',
     changeOrigin: true,
    })
  );
};
