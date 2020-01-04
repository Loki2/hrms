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

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// app.use(function(req, res, next){
//     res.status(404); 
//     if (req.accepts('ejs')) {// respond with html page
//       res.render('404', { url: req.url });
//       return;
//     } 
//     if (req.accepts('json')) {// respond with json
//       res.send({ error: 'Page Not found' });
//       return;
//     } 
//     res.type('txt').send('Not found');// default to plain-text. send()
//   });
/*
 **** All Routes is get from here
 */
const usersRoute = require('./routes/users.Route');






/*
 **** Use all Routes
 */
app.use('/users', usersRoute);


/*
 **** Use error handling Routes
 */
// app.use((req, res, next) => {
//     const error = new Error('Not Found');
//     error.status = 404;
//     next(error);
// });
// app.use((error, req, res, next) => {
//     res.status(err.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     })
// });
module.exports = app;