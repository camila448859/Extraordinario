const express = require('express');
const io = require('socket.io')();
const statusMonitor = require('express-status-monitor');

const app = express();
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
app.listen(3000, () => console.log('server started'));

//redirecccion al inicio
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + 'public');
})