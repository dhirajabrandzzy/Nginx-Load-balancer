const express = require('express');
     const app = express();

     app.get('/', (req, res) => {
       res.send('Hello from Node.js!');
     });

     app.listen(8002, () => {
       console.log('Node.js app listening on port 8002');
     });