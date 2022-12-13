import express from 'express';
import statusMonitor from 'express-status-monitor';
import { Server as WebSocketServer } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server)

// usa el status-monitor middleware para monitorear el status de tu app
app.use(statusMonitor());

//coneccion
io.on('connection', (socket) => {
    setInterval(() => {
      socket.emit('server-metrics', {
        memory: process.memoryUsage(),
        cpu: os.loadavg()
      });
    }, 1000);
});

//conexion al servidor
app.set('port', process.env.PORT || 3000);
server.listen(app.get('port'), ()=> console.log('escuchando en 3000'))

//redirecccion al inicio
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'public');
})