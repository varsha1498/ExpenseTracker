const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');


dotenv.config({path: './config/config.env'});

connectDB();

const transactions = require('./routes/transactions.js');
const app = express();

app.use(cors());
app.use(express.json());


if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}
app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on  PORT: ${PORT}`));