const socket = io();

socket.on('server-metrics', (metrics) => {
  document.getElementById('memory').innerHTML = metrics.memory;
  document.getElementById('cpu').innerHTML = metrics.cpu;
});
