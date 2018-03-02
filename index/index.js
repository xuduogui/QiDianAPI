const http = require('http');
const app = require('../app');

const port = normalizePort('3000' || process.env.PORT || '3300');
const server = http.createServer(app.callback());

console.log('服务启动端口：' + port);
server.listen(port);

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

