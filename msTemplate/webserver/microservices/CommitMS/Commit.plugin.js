const writeFile = require('fs').writeFile;
module.exports = function (options) {

    this.add('role:commit,cmd:commitIntoLedger', function (msg, respond) {
        console.log('message received at Commit Microservice Plugin', msg);

        commitIntoLedger(msg).then(
            res => respond(null, { response: res }),
            err => respond({ err: 'Error in committing tx' + err })
        )

    })

    commitIntoLedger=async(msg)=>{
        // creating ledger
        return new Promise((resolve, reject)=>{
            writeFile(__dirname + '/ledger.json', JSON.stringify(msg.chain), (err) => {
                if(err) {
                    console.log(err); // Do something to handle the error or just throw it
                    throw new Error(err);
                }
                console.log('Success!');
                resolve("tx committed into ledger");
            });
            
        })
       
    }

}