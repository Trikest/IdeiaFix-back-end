const express = require('express');
const routes = require('./src/routes/index');  // Importa as rotas do arquivo index.js em src/routes

const app = express();

// Middleware para lidar com requisições JSON
app.use(express.json());

// Utilizando as rotas
app.use(routes);

// Configuração da porta
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
