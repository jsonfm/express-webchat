const express = require("express");
const { createServer } = require("http");
const path = require("path");
const config = require("./config");
const routes = require("./routes");
const configureSocketIOServer = require("./socket");

const app = express();
const server = createServer(app);


// Settings
app.set("port", config.PORT);
app.set("view", path.join(__dirname, "views"));


// Public
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(routes);


// server
configureSocketIOServer(server);
server.listen(config.PORT, () => {
    console.log(`App running on ${config.PORT}`);
})