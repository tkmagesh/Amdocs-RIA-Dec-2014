var fs = require("fs"),
	http = require("http"),
	url = require("url"),
	path = require("path");

var server = http.createServer(function(req,res){
	console.log(req.url);
	req.url = url.parse(req.url, true);
	var filePath = path.join(__dirname,req.url.pathname);
	if (fs.existsSync(filePath)){
		var stream = fs.createReadStream(filePath, {encoding : "utf8"});
		stream.pipe(res);
	} else {
		res.statusCode = 404;
		res.end();
	}
});
server.listen(8080);
console.log("server listening on port 8080!");