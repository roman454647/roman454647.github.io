const WebSocket = require('ws');

const server = new WebSocket.Server({port:3000});

//подія яка відбудеться коли клієнт підключиться до серверу
server.on('connection',ws =>{
  ws.send("welcome to web_socket");
});
