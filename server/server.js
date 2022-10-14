var express = require('express'); // Import express.js
var app = express(); // use app object for express
var http = require('http').Server(app);
var cors = require('cors'); // Allow cross site origin requests
app.use(cors());
const MongoClient = require('mongodb').MongoClient; // requires MongoClient
var ObjectID = require('mongodb').ObjectID; // requires ObjectID
const url = 'mongodb://localhost:27017';
// Setup for Sockets
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST']
  }
});
const sockets = require('./sockets.js');
const socketserver = require('./listen.js');
const PORT = 3000;
sockets.connect(io, PORT);
socketserver.listen(http, PORT)

//Enable CORS for all HTTP methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, post, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // Mount json middleware
app.use(express.static(__dirname + '../dist/chatSystem'));
console.log(__dirname);

// let server = http.listen(PORT, function () {
//   let host = server.address().address
//   let port = server.address().port
//   console.log("Server listening on: " + host + " port: " + port)
// })

// login routes
app.post('/api/auth', require('./router/postLogin'));
app.post('/loginafter', require('./router/postLoginAfter'));

// user routes
// app.post('/addUser', require('./router/users/adduser'));
// app.post('/user/:userId', require('./router/users/removeuser'));
// app.post('/api/auth', require('./router/users/getusers'));

// group routes
// app.post('/loginafter', require('./router/groups/addgroup'));
// app.post('/loginafter', require('./router/groups/removegroup'));
// app.post('/loginafter', require('./router/groups/addgroupmember'));
// app.post('/loginafter', require('./router/groups/removegroupmember'));
// app.post('/loginafter', require('./router/groups/getgroups'));

// channel routes
// app.post('/api/auth', require('./router/channels/addchannel'));
// app.post('/api/auth', require('./router/channels/removechannel'));
// app.post('/api/auth', require('./router/channels/addchannelmember'));
// app.post('/api/auth', require('./router/channels/removechannelmember'));
// app.post('/api/auth', require('./router/channels/getchannels'));

module.exports = app;