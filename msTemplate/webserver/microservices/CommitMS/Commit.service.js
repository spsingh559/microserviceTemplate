var seneca = require('seneca')();
var commitPlugin = require('./Commit.plugin');
  seneca
  .use(commitPlugin)
  .use('mesh', { auto:true, pin:'role:commit,cmd:*'})