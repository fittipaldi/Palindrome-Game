// load .env configuration before doing anything
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.render('index.html');
});

// Routes instance
const routeApi = require('./app/routes/Api');
app.use('/api', routeApi);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server PID[${process.pid}] started on port: ${port}`);
});