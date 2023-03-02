const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});


app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});



app.listen(3000)