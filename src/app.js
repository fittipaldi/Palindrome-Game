const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Cross Domain
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_ORIGIN || '*'
}));
// POST body json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Client public path
app.use(express.static(path.join(__dirname, '../public')));

// Root action
app.get('/', (req, res) => {
    res.render('index.html');
});

// Routes instance
const routeApi = require('./routes/Api');
app.use('/api', routeApi);

module.exports = app;