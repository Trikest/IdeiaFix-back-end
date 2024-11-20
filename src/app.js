const express = require('express');
//const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();

// Middleware para trabalhar com JSON
app.use(express.json());

// Rotas
//app.use('/api', usuarioRoutes);

module.exports = app;
