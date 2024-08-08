const http = require('http')
const { WebSocketServer } = require("ws")
const app = require('./app.js')

const PORT = process.env.PORT

const server = http.createServer(app);
// const wss = new WebSocketServer({ server })

// let connectedClients = [];

// wss.on("connection", function connection(ws) {

//     connectedClients.push(ws);

//     ws.on('message', function message(data) {
//         console.log('received: %s', data);
//     });

//     ws.send("NewOrder");

//     console.log("A new client is connected");
// })

// module.exports = connectedClients;

// wss.on('close', function close(client) {
//     console.log(client)
// })

server.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})