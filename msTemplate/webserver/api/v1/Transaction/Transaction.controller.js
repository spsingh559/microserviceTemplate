var controller={};
var seneca = require('seneca')();
seneca.use('mesh',{auto:true});

controller.createTransaction=(req,res)=>{
  console.log('request reached to transaction api');
  seneca.act('role:transaction,cmd:createTransaction',{data:req.body},function(err,response){
    if(err){
      console.log('error in Connecting Transaction Microservice');
       res.send(err);
    }else{
       console.log(response);
      res.send({msg:response});
    }
 });
}



exports = module.exports = controller;
