const mongoose = require('mongoose');
// connection string do MongoDB Atlas z nazwą bazy danych (np. grafiki_transport)
const MONGODB_URI = 'mongodb+srv://MostekM:g7Aw9xyN6Fca4AHD@cluster0.n1ycp.mongodb.net/Grafik';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Poprawne połączenie z MongoDB Atlas"))
.catch((error) => console.error("Nie udało się połączyć z MongoDB Atlas", error));

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware do obsługi JSON
app.use(express.json());
// Middleware CORS
app.use(cors());

// Rejestracja tras
const schedulesRoutes = require('./routes/schedules');
app.use('/api/schedules', schedulesRoutes);

// Prosta trasa testowa
app.get('/', (req, res) => {
  res.send('Backend działa!');
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
