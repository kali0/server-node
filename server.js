const http = require('http');
const fs = require('fs');
const host = 'localhost';
const port = 3000;
const getStats = require('./pcRamUsage.js');

http.createServer((req, res) => {
    if (req.url === '/stats') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(getStats()));
    } else if (req.url === '/') {
        fs.readFile('./index.html', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Whoops! File not found!');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else {
        res.end('Seja bem vindo!');
    }
}).listen(port, () => console.log(`Server running at http://${host}:${port}`));
