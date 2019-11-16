var router = require('express').Router();

router.use('/v1/transaction', require('./webserver/api/v1/Transaction/Transaction.router'));

exports = module.exports = router;