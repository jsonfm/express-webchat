const express = require("express");
const { createServer } = require("http");
const path = require("path");
const eta = require("eta");
const cookieParser = require("cookie-parser");
const config = require("./config");
const routes = require("./routes");
const configureSocketIOServer = require("./socket");

const app = express();
const server = createServer(app);


// Middleware
app.use(cookieParser());

// Settings
app.set("port", config.PORT);

// Templates engine
app.engine("eta", eta.renderFile)
app.set("view engine", "eta");
app.set("views", path.join(__dirname, "views"));


// Public
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use(routes);


// server
configureSocketIOServer(server);
server.listen(config.PORT, () => {
    console.log(`App running on http://localhost:${config.PORT}`);
})