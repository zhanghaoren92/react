const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy("/app", {
      target: 'http://101.132.145.12',
      changeOrigin: true
    })
  );
  app.use(
    proxy("/v2", {
      target: "https://api.douban.com",
      changeOrigin: true
    })
  );

};