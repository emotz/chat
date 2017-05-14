const express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

app.use(express.static(__dirname + '/../frontend/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/../frontend/public/index.html');
});

io.on('connection', function (client) {
    client.on('addUser', function (username) {
        client.username = username;
        client.broadcast.emit('newUser', username);
    });

    client.on('newMessage', function (data) {
        io.emit('newMessage', { username: client.username, msg: data.msg, time:data.time});
    });

    client.on('typing', function(data){
        client.broadcast.emit('typing', client.username);
    });

    client.on('stopTyping',function(data){
        client.broadcast.emit('stopTyping', client.username);
    });
});

server.listen('8000');