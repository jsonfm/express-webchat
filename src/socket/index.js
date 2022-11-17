const configureSocketIOServer = (server) => {
    const { Server } = require("socket.io");
    const io = new Server(server);


    io.on("connection", (socket) => {
        const cookie = socket.handshake.headers.cookie;
        const user = cookie.split("=").pop()

        socket.on("message", message => {
            io.emit("message",{
                user,
                message
            });
        });
    })
}

module.exports = configureSocketIOServer;