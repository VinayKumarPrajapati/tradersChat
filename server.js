const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const socketServer = require("./socketServer");
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

const server = http.createServer(app);
socketServer.registerSocketServer(server);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		server.listen(PORT, () => {
			console.log(`server is listening on ${PORT}`);
		});
	})
	.catch((err) => {
		console.log("db connection fail");
		console.error(err);
	});
