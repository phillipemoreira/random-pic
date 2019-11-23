var path = require('path');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var key = process.env.KEY;

    res.sendFile(path.join(__dirname + '/src/index.html'));
    res.redirect('/content.html?key=' + key);
});
  
app.use(express.static(__dirname + '/src'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});