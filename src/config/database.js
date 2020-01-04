require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true 
});

const config = mongoose.connection

config.on('error', error => console.error(error));
config.once('open', () => console.log("Connected mongodb...!Loki"))

module.exports = config;
