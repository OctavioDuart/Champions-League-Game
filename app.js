const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const port = process.env.PORT || 8000;
const routes = require('./routes');
const cors = require ('cors');

require('./tests');

const app = express();
app.use(cors());
app.use(routes);

const server = http.createServer(app);
const io = socketIo(server);


server.listen(port, (err) => {
    (!err) ? console.log(`Server running on port ${port}`) : console.error(`Ocurred a error : ${err}`)
});