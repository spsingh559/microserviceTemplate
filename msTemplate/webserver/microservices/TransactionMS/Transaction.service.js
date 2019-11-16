var seneca = require('seneca')();
var txPlugin = require('./Transaction.plugin');
  seneca
  .use(txPlugin)
  .use('mesh', { auto:true, pin:'role:transaction,cmd:*'})