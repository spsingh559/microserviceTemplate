---


---

<h1 id="microservice-template">Microservice Template</h1>
<p>This is simple example of configuring Seneca js microservices with express api and build integrated microservices communication network using Mesh (gossip protocol).</p>
<h1 id="microservices">Microservices</h1>
<p>There are three microservice :<br>
<strong>Transaction Microservice</strong> : It create the transaction based on user provided data (using /transaction api)and send updated information to Orderer Microservices</p>
<p><strong>Orderer Microservices</strong> : It create a batch or block and add its signature and send to commit Microservice.</p>
<p><strong>Commit Microservice</strong> : It store the data into a file and send back response to Ordering Microserice and which in turn notify Transaction Microservice.</p>
<p><strong>Base Microservice:</strong> It bootstrap the mesh network.</p>
<h2 id="interesting-thing-to-know">Interesting Thing to know</h2>
<p>Mesh create a decentralise network of microservices which has capabilty to do auto discover without any help of central registry.</p>
<h2 id="bootstrapping-application">Bootstrapping Application</h2>
<p>cd /msTemplate<br>
npm install nodemon -g<br>
npm i</p>
<h2 id="starting-microservices-in-a-order">Starting Microservices in a order</h2>
<p>cd /webserver/microservices</p>
<p><strong>Base Microservices :</strong><br>
cd /BaseMS<br>
npm i<br>
npm run start<br>
npm run monitor</p>
<p><strong>Transaction Microservices</strong>:</p>
<p>cd /TransactionMS<br>
npm i<br>
npm run start</p>
<p><strong>Orderer Microservices</strong> :<br>
cd /OrdereMS<br>
npm i<br>
npm run start</p>
<p><strong>Commit Microservices :</strong><br>
cd /CommitMS<br>
npm i<br>
npm run start</p>
<h2 id="starting-server">Starting Server</h2>
<p>Go into Root folder.<br>
cd /msTemplate<br>
npm run start</p>
<h2 id="create-transaction">Create Transaction</h2>
<p>call API using curl :<br>
curl -d “param1=value1&amp;param2=value2” -X POST <a href="http://localhost:3000/api/v1/transaction">http://localhost:3000/api/v1/transaction</a></p>
<h1 id="result">Result</h1>
<p>It create a ledger.json file inside /webserver/microservices/CommitMS, which is result of intercommunication of API to Transaction MS ( Microservices) -&gt; Orderer MS -&gt;Commit MS</p>
<h2 id="uml-diagrams">UML diagrams</h2>
<p>sequence diagram:</p>
<div class="mermaid"><svg xmlns="http://www.w3.org/2000/svg" id="mermaid-svg-x5wnB5prEdEGjAw6" height="100%" width="100%" style="max-width:850px;" viewBox="-50 -10 850 371"><g></g><g><line id="actor1697" x1="75" y1="5" x2="75" y2="360" class="actor-line" stroke-width="0.5px" stroke="#999"></line><rect x="0" y="0" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="75" y="32.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle;"><tspan x="75" dy="0">Transaction API</tspan></text></g><g><line id="actor1698" x1="275" y1="5" x2="275" y2="360" class="actor-line" stroke-width="0.5px" stroke="#999"></line><rect x="200" y="0" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="275" y="32.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle;"><tspan x="275" dy="0">Transaction MS</tspan></text></g><g><line id="actor1699" x1="475" y1="5" x2="475" y2="360" class="actor-line" stroke-width="0.5px" stroke="#999"></line><rect x="400" y="0" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="475" y="32.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle;"><tspan x="475" dy="0">Orderer</tspan></text></g><g><line id="actor1700" x1="675" y1="5" x2="675" y2="360" class="actor-line" stroke-width="0.5px" stroke="#999"></line><rect x="600" y="0" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="675" y="32.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle;"><tspan x="675" dy="0">Commit</tspan></text></g><defs><marker id="arrowhead" refX="5" refY="2" markerWidth="6" markerHeight="4" orient="auto"><path d="M 0,0 V 4 L6,2 Z"></path></marker></defs><defs><marker id="crosshead" markerWidth="15" markerHeight="8" orient="auto" refX="16" refY="4"><path fill="black" stroke="#000000" stroke-width="1px" d="M 9,2 V 6 L16,4 Z" style="stroke-dasharray: 0, 0;"></path><path fill="none" stroke="#000000" stroke-width="1px" d="M 0,1 L 6,7 M 6,1 L 0,7" style="stroke-dasharray: 0, 0;"></path></marker></defs><g><text x="175" y="93" class="messageText" style="text-anchor: middle;">Transaction data {param1=value1&amp;param2=value2}</text><line x1="75" y1="100" x2="275" y2="100" class="messageLine0" stroke-width="2" stroke="black" marker-end="url(#arrowhead)" style="fill: none;"></line></g><g><text x="375" y="128" class="messageText" style="text-anchor: middle;">create Block using Tx data</text><line x1="275" y1="135" x2="475" y2="135" class="messageLine1" stroke-width="2" stroke="black" marker-end="url(#arrowhead)" style="stroke-dasharray: 3, 3; fill: none;"></line></g><g><text x="575" y="163" class="messageText" style="text-anchor: middle;">Store data into ledger file</text><line x1="475" y1="170" x2="675" y2="170" class="messageLine1" stroke-width="2" stroke="black" marker-end="url(#crosshead)" style="stroke-dasharray: 3, 3; fill: none;"></line></g><g><text x="575" y="198" class="messageText" style="text-anchor: middle;">Result -&gt; Operation Success</text><line x1="675" y1="205" x2="475" y2="205" class="messageLine0" stroke-width="2" stroke="black" marker-end="url(#crosshead)" style="fill: none;"></line></g><g><text x="375" y="233" class="messageText" style="text-anchor: middle;">Result -&gt; Operation Success</text><line x1="475" y1="240" x2="275" y2="240" class="messageLine0" stroke-width="2" stroke="black" marker-end="url(#crosshead)" style="fill: none;"></line></g><g><text x="175" y="268" class="messageText" style="text-anchor: middle;">Result -&gt; Operation Success</text><line x1="275" y1="275" x2="75" y2="275" class="messageLine0" stroke-width="2" stroke="black" marker-end="url(#crosshead)" style="fill: none;"></line></g><g><rect x="0" y="295" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="75" y="327.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle;"><tspan x="75" dy="0">Transaction API</tspan></text></g><g><rect x="200" y="295" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="275" y="327.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle;"><tspan x="275" dy="0">Transaction MS</tspan></text></g><g><rect x="400" y="295" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="475" y="327.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle;"><tspan x="475" dy="0">Orderer</tspan></text></g><g><rect x="600" y="295" fill="#eaeaea" stroke="#666" width="150" height="65" rx="3" ry="3" class="actor"></rect><text x="675" y="327.5" dominant-baseline="central" alignment-baseline="central" class="actor" style="text-anchor: middle;"><tspan x="675" dy="0">Commit</tspan></text></g></svg></div>

