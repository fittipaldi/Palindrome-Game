const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

//Cross Domain
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_ORIGIN || '*'
}));
app.use(express.json({
    type: 'application/json'
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.render('index.html');
});

// Routes instance
const routeApi = require('./routes/Api');
app.use('/api', routeApi);

module.exports = app;