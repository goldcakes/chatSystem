var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname + '../dist/chatSystem'));
console.log(__dirname);

var http = require('http').Server(app);
let server = http.listen(3000, function () {
  let host = server.address().address
  let port = server.address().port
  console.log("Server listening on: " + host + " port: " + port)
})

app.post('/api/auth', require('./router/postLogin'))
app.post('/loginafter', require('./router/postLoginAfter'));