//Install express server
const express = require('express');
const path = require('path');
var enforce = require('express-sslify');

const app = express();

app.use(enforce.HTTPS()); 

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/'));

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
