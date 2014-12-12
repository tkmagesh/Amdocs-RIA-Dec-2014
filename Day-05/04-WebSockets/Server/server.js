var nodeSocket = require("nodejs-websocket");
var server = nodeSocket.createServer(function(connection){
	console.log("A new connection is established");
	connection.on("text", function(msg){
		console.log("Data from client = ", msg);
		if (msg === "time"){
			var counter = 0;
			var timerId = setInterval(function(){
				++counter;
				connection.sendText(new Date().toString());
				if (counter >= 10)
					clearInterval(timerId);
			}, 5000);
		}
	});
});
server.listen(9090);
console.log("Socket server listening on port 9090!!");