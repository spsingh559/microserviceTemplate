module.exports = function (options) {
    //options is to pass any parameter to the service like mongo instance, or any other plugin configuation

    this.add('role:transaction,cmd:createTransaction', function (msg, respond) {
        console.log('message received at Tx Microservice Plugin', msg);

        processTransaction(msg.data).then(
            res => respond(null,  res ),
            err => respond({ err: 'Error in tx processing' + err })
        )

    })

    processTransaction = async (msg) => {
        // create a simple transaction
        let result;
        let tx = {
            id: Date.now(),
            payload: msg,
            client_signature: "34409dfsvdniodfvdcvjksdvdu475340573405345630489635097209370",
            version: "v0"
        }
console.log('tx data', tx);
        // send this transaction to orderer
        try {
            result = await sendToOrderer(tx)
        } catch (e) {
            throw e.err;
        }

        return result;

    }

    sendToOrderer = async (tx) => {
        return new Promise((resolve, reject) => { //calling to Orderer Microservice
            this.act('role:orderer,cmd:createBlock', {tx:tx}, function (err, response) {
                if (err) {
                    console.log('error in Connecting Ordering Microservice');
                    reject(err);
                } else {
                    console.log("Ordering Microservice connected");
                    console.log(response);
                    resolve(response);
                }
            });
        })

    }

}