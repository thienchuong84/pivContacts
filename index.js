const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('./config');
mongoose.connect(config.db);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', () => {
  console.log('connect contactpiv db mlab success..');
});

var contacts = require('./routes/contacts');

// initialiaxe our app variable
const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('', express.static(path.join(__dirname, 'dist')));

const port = 3007;

// middleware for CORS
app.use(cors());

// middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extends: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('pivotal contact page');
});

// app.use('/contacts', contacts);
app.use('/api/contacts', contacts);

app.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});