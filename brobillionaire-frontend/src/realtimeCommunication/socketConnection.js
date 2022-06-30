import io from "socket.io-client";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
	socket = io("http://localhost:50001");

	socket.on("connect", () => {
		console.log("Succesfully Connected with socket.io");
		console.log(socket.io);
	});
};
