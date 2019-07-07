var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const BlockChain = require('./server/BlockChain');
const Block = require('./server/Block');

const chain = new BlockChain();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  console.log('============');
  console.log('current chain', chain);

  socket.on('message', (data) => {
    console.log("==========", data)
    chain.addBlock(new Block(new Date(), { message: data.data, user: socket.id}))
    socket.emit('send-chain', chain)
  })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});