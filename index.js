// load .env configuration before doing anything
require('dotenv').config();

const app = require('./src/app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server PID[${process.pid}] started on port: ${port}`);
});