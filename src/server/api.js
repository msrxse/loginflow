const express = require('express');
const path = require('path');

const app = express();

const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || 3001;

// Enable CORS to enable calls to http://localhost:
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api', (req, res) => {
  res.sendFile(path.normalize(path.join(__dirname, '/../data/user.json')));
});

app.listen(PORT, IP, (err) => {
  if (err) console.log(`=> OMG!!! 🙀 ${err}`);
  console.log(`Server up: http://localhost:${PORT}/api`);
});
