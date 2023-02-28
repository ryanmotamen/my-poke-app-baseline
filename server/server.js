const express = require('express');
const app = express();
const path = require('path');


app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.listen(3000)