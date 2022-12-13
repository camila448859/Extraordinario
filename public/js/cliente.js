const socket = io();

socket.on('server-metrics', (metrics) => {
  document.getElementById('memory').innerText = metrics.memory;
  document.getElementById('cpu').innerText = metrics.cpu;
});
