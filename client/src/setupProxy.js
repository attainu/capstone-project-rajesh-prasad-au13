const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/login", {
      target: "http://localhost:3000",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/signup", {
      target: "http://localhost:3000",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/user", {
      target: "http://localhost:3000",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/movies", {
      target: "http://localhost:3000",
      changeOrigin: true,
    })
  );
};
