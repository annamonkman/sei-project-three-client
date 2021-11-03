const { createProxyMiddleware } = require('http-proxy-middleware')
// import { createProxyMiddleware } from 'http-proxy-middleware'

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', { target: 'https://festivalist-apiherokuapp.com', "changeOrigin": true }))
}
