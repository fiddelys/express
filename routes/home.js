const express = require('express');
const router = express.Router();

// Route principale
router.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil !');
});

module.exports = router;
