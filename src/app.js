const express = require('express');
const usuarioRoutes = require('./routes/userRoutes'); // Importe as rotas

const app = express();

// Middleware para trabalhar com JSON
app.use(express.json());

// Conectar as rotas
app.use('/api', usuarioRoutes); // Rota base será /api/usuarios

module.exports = app;
