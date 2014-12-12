var http = require("http");
http.createServer(function(request, response){
	response.write(new Date().toString());
	//response.end();
}).listen(9090);
