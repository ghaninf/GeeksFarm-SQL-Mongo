var http = require('http');

var server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><p>Home Page. </p></body></html>');
        res.end();
    }
    else if (req.url == '/profile'){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><p>Profile Page. </p></body></html>');
        res.end();
    }
    else if (req.url == '/contact'){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><p>Contact Page. </p></body></html>');
        res.end();
    }
    else if(req.url == '/about'){
        res.writeHead(200, { 'Content-Type': 'text/html'});
        res.write('<html><body><p>About Page. </p></body></html>');
        res.end();
    }
    
    else {
        res.end('Invalid Request');
    }
});

server.listen(3001);
console.log("Server running on port 3001");