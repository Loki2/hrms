const express = require('express');
const router = express.Router();
const { } = require('../controller/usersController');

router.get('/', (req, res, next) => {
    res.render('../../views/index')
})

module.exports = router;