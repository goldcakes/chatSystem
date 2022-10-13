var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

//Enable CORS for all HTTP methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, post, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(__dirname + '../dist/chatSystem'));
console.log(__dirname);

var http = require('http').Server(app);
let server = http.listen(3000, function () {
  let host = server.address().address
  let port = server.address().port
  console.log("Server listening on: " + host + " port: " + port)
})

app.post('/api/auth', require('./router/postLogin'));
app.post('/loginafter', require('./router/postLoginAfter'));

app.post('/api/auth', require('./router/users/adduser'));
app.post('/api/auth', require('./router/users/removeuser'));
app.post('/api/auth', require('./router/users/getusers'));

app.post('/loginafter', require('./router/groups/addgroup'));
app.post('/loginafter', require('./router/groups/removegroup'));
app.post('/loginafter', require('./router/groups/addgroupmember'));
app.post('/loginafter', require('./router/groups/removegroupmember'));
app.post('/loginafter', require('./router/groups/getgroups'));

app.post('/api/auth', require('./router/channels/addchannel'));
app.post('/api/auth', require('./router/channels/removechannel'));
app.post('/api/auth', require('./router/channels/addchannelmember'));
app.post('/api/auth', require('./router/channels/removechannelmember'));
app.post('/api/auth', require('./router/channels/getchannels'));
