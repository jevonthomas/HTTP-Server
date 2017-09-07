const http = require('http');
const fs = require('fs');

// Found this on stack overflow and modified it to work for me

fs.readFile('./index.html', function (err, html) {
	if (err) {
			throw err; 
	}       
	http.createServer(function(request, response) {  
			response.writeHeader(200, {"Content-Type": "text/html"});  
			response.write(html);  
			response.end();  
	}).listen(8080);
});