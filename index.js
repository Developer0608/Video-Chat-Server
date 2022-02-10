const { DBConnection } = require('./lib/db');

const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: {
      origin : 'http://localhost:3000',
      method : ['GET', 'POST']
    }
});

const db = DBConnection;

io.on('connection', (socket) => {
  console.log('Call From Client');
  socket.on('join-call', (user) => {
    console.log('Joined User Name : ', user);
  })
});

server.listen(3500, () => {
  console.log('Server started on 3500');
})