// Webserver variables
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 8000;

app.use(express.json());

// Socket.IO variables
const { Server } = require('socket.io');
const io = new Server(server);

// Express routes
app.use("/", require('./dstark-nl/dstark-nl'));
app.use("/resume", require('./resume/resume'));

// Socket.IO events
io.on('connection', (socket) => {
    console.log('A user is connected');
    socket.on('disconnect', () => {
        console.log('The user is disconnected');
    });
})

// Start server
server.listen(port, () => {
    console.log(`Server started on port ${port}`)
})