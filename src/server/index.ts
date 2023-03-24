// src/server/index.ts

import express from 'express';
import http, {type Server as HttpServer} from 'http';
import {Server as SocketIoServer, type Socket} from 'socket.io';
import path from 'path';

const app = express();
const port = process.env.PORT ?? 3000;

/** HTTP server instance. */
const server: HttpServer = http.createServer(app);

/** Socket.IO server instance. */
const io: SocketIoServer = new SocketIoServer(server, {
	pingTimeout: 60000,
});

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../client', 'index.html'));
});

server.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});

io.on('connection', (socket: Socket) => {
	console.log(`User connected: ${socket.id}`);

	// Add your socket event listeners here
	socket.on('disconnect', () => {
		console.log(`User [${socket.id}] disconnected`);
	});
});
