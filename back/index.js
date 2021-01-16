const express = require('express');
const cors = require('cors');
require('express');
require('dotenv').config();
const magicConnection = require('./routes/magic-controller.js');

const app = express();

const { SERVER_PORT, CLIENT_URL } = process.env;

app.use(
  cors({
    origin: CLIENT_URL,
  })
);
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', magicConnection)

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}.`);
});
