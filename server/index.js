const http = require('http');
const PORT = 8000;

const server = http.createServer((req, res)=>{
    res.write('<h1>Hello from Node JS</h1>');
    res.write('<p>This is a text</p>');
    res.end();
});

server.listen(PORT, () => {
    console.log('Server started with port', PORT);
});