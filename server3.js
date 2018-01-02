var express = require('express');
var app = express();

app.get('/users', function (req, res) {
    var data = 'Login success';
    res.send(data);
    console.log(data);
});

app.get('/api/user/getEmail', function (req, res) {
  var data = '1278272822@qq.com';
  res.send(data);
  console.log('getEmail success');
});


app.listen(3000);
console.log("Express server listening on port 3000");
