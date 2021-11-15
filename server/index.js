require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./DB/connectDB');

// Conntect DB here
connectDB();

// Assign port
const PORT = process.env.port || 5500;

// Configure server
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

/**
 * Built By MPAW
 * https://github.com/M-PAW
 */

// Link Router
const router = require('./routes/router');
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})