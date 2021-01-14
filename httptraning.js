const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.end('hello i am sending you some responce from homepage');
    } else if(req.url == '/about'){
        res.end('hello i am sending you some responce from about page');
    } else {
        res.writeHead(404);
        res.end('404 Page not found');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('server is running on port 8000');
});