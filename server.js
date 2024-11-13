const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// 7.73 KB
app.get('/low', (req, res) => {
    const topSellers = require("./topSellersName.json");
  
    res.json(topSellers);
});

// 72.72 KB
app.get('/mid', (req, res) => {
  const topSellers = require("./topSellers.json");

  res.json(topSellers);
});

// 222.7 KB
app.get('/high', (req, res) => {
  const softwareArticles = require("./softwareArticles.json");

  res.json(softwareArticles);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
