var seneca = require('seneca')();
var ordererPlugin = require('./Orderer.plugin');
  seneca
  .use(ordererPlugin)
  .use('mesh', { auto:true, pin:'role:orderer,cmd:*'})