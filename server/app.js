var webSocketsServerPort = 3001;

var webSocketsServer = require('websocket').server;
var http = require('http');

var history = [];
var clients = [];

var server = http.createServer(function(request, response){

})

server.listen(webSocketsServerPort, function(){
    console.log((new Date()) + " Server is listen on port "+webSocketsServerPort);
});



var wsServer = new webSocketsServer({
    httpServer:server
});

wsServer.on('request', function(request){
    console.log((new Date()) + ' Connection from' + request.origin + ".");
    var connection = request.accept(null, request.origin);
    var index = clients.push(connection) - 1;
    var userName = false;
    var userColor = false;

    console.log((new Date()) + ' connction accepted.');

    if(history.length > 0){
        connection.sendUTF(JSON.stringify({type:'history', data:history}));
        
    }

    connection.on('message', function(message){
        console.log("receive data");
        console.log(message);
    });

    connection.on('close', function(connection){
        
    });

})