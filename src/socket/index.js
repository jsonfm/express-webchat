const configureSocketIOServer = (server) => {
    const { Server } = require("socket.io");
    const io = new Server(server);
    io.on("connection", () => {
        console.log("Hello world!");
    })
}

module.exports = configureSocketIOServer;