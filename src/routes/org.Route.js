const express = require('express');
const router = express.Router();
const { } = require('../controller/usersController');

router.get('/', (req, res, next) => {
    res.render('org/index')
})

module.exports = router;