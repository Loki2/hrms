require("dotenv").config();
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));



/*
 **** All Routes is get from here
 */
const indexRoute = require('./routes/index.Route');
const orgRoute = require('./routes/org.Route');



/*
 **** Create Middle-Ware for  All Routes is get from here
 */


/*
 **** Use all Routes
 */
app.use('', indexRoute);
app.use('/org', orgRoute);





module.exports = app;