const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.sendFile('./index.html');
});

app.get('/favicon.ico' || '/favicon.png', (req, res) => {
  res.sendFile(__dirname + '/assets/favicon.png');
});

app.listen((process.env.PORT || 8000), () => console.log(`Ekmand Host listening on port`, (process.env.PORT || 8000)));