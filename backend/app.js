const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware do obsługi JSON
app.use(express.json());

// Prosta trasa testowa
app.get('/', (req, res) => {
  res.send('Backend działa!');
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});