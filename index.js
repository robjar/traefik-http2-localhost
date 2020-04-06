const http2 = require('http2');
const fs = require('fs');
 
function onRequest (req, resp) {
    resp.end("Hello World, it works here too!!!");
}
 
const server = http2.createSecureServer({
  key: fs.readFileSync(__dirname + '/secrets/localhost-key.pem'),
  cert: fs.readFileSync(__dirname + '/secrets/localhost-cert.pem')
}, onRequest);
 
server.listen(8086);
