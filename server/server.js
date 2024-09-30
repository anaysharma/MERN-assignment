const express = require('express');
const cors = require('cors');

const connectDb = require('./config/db.js');
require('dotenv').config();
const path = require('path');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<pre>MERN assignment server<pre>');
});

app.use('/api', require('./routes/index.js'));

const PORT = process.env.PORT;
const dbURL = process.env.DB_URL;

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
  connectDb(dbURL);
});
