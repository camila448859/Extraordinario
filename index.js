import express from 'express';
import bodyParser from 'body-parser';
import statusMonitor from 'express-status-monitor';

const app = express();

app.use(statusMonitor());

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + 'public');
});

app.listen(3000, () => console.log('server started'));