const express = require('express');
const path = require('path');
const homeRouter = require('./routes/home'); // Import des routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Utilisation des routes
app.use('/', homeRouter);

// Route supplémentaire pour les pages HTML dans /views
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).send('Page non trouvée');
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
