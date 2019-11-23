var path = require('path');
var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    var key = process.env.KEY;

    res.sendFile(path.join(__dirname + '/src/index.html'));
    res.redirect('/content.html?key=' + key);
});
  
app.use(express.static(__dirname + '/src'));

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});