module.exports = function (options) {

    this.add('role:orderer,cmd:createBlock', function (msg, respond) {
        console.log('message received at Orderer Microservice Plugin', msg);

        createBlock(msg.tx).then(
            res => {
                console.log('res in orderer');
                respond(null, res)
            },
            err => respond({ err: 'Error in tx processing' + err })
        )

    })

    createBlock=async(msg)=>{
        let result;
        // creating Block
        let block={
            blockId:Date.now(),
            data:msg,
            blockNumber:0,
            timeStamp:Date.now(),
            orderer_signature:'49541dhfsdhglfdngsdfnfldgfnglnsldfngfl59605605096594'
        }

        //globalBlock Array
        let chain=[];
        chain.push(block);

        //send data to Committing Microservice
        try{
            result=await commitIntoLedger(chain);
        }catch(e){
            throw e.err;
        }
        console.log('result is', result);
        return result;

    }

    commitIntoLedger =async(chain)=>{
        console.log('data inside commitIntoLedger function', chain);
        return new Promise((resolve, reject) => { //calling to Orderer Microservice
            this.act('role:commit,cmd:commitIntoLedger',{chain: chain}, function (err, response) {
                if (err) {
                    console.log('error in Connecting Commit Microservice');
                    reject(err);
                } else {
                    console.log("Commit Microservice connected");
                    console.log(response);
                    resolve(response);
                }
            });
        })
    }
}