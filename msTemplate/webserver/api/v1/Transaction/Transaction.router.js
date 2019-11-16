const router = require('express').Router();


const transactionController = require('./Transaction.controller.js');
router.post('/',transactionController.createTransaction);
exports = module.exports = router;
