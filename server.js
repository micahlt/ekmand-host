const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
  res.sendFile('./index.html');
});

app.get('/favicon.ico' || '/favicon.png', (req, res) => {
  res.sendFile(__dirname + '/assets/favicon.png');
});

app.get('/api', (req, res) => {
  res.send("Ekmand Host API, running live on port " + (process.env.PORT || 8000));
})

app.put('/api/verify', (req, res) => {
  res.send(req);
})

app.listen((process.env.PORT || 8000), () => console.log(`Ekmand Host listening on port`, (process.env.PORT || 8000)));