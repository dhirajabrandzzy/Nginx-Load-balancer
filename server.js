const express = require('express');
     const { createProxyMiddleware } = require('http-proxy-middleware');

     const app = express();

     const targets = [
       'http://localhost:8000',  // PHP Application
       'http://localhost:8001',  // Node.js Application
       'http://localhost:8002'   // Python Application
     ];

     let currentIndex = 0;

     app.use('/', (req, res, next) => {
       const proxy = createProxyMiddleware({ target: targets[currentIndex], changeOrigin: true });
       currentIndex = (currentIndex + 1) % targets.length;
       proxy(req, res, next);
     });

     app.listen(8080, () => {
       console.log('Reverse proxy listening on port 8080');
     });