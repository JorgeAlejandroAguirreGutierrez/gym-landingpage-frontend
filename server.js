//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/'));

app.get('/*', function(req, res) {

    res.redirect('https://' + req.headers.host + req.url);
    //res.sendFile(path.join(__dirname + '/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
