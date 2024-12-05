const express = require('express');
const usuarioRoutes = require('./routes/userRoutes'); // Importe as rotas
const authRoutes = require('./routes/authRoutes');
const agendamentosRoutes = require('./routes/AgendamentoRoutes')
const notificacaoRoutes = require('./routes/NotificacaoRoutes')
const app = express();

// Middleware para trabalhar com JSON
app.use(express.json());

// Conectar as rotas
app.use('/api', usuarioRoutes);
app.use('/agenda', agendamentosRoutes);
app.use('/noti', notificacaoRoutes);
// Rota base será /api/usuarios
app.use('/auth', authRoutes);

module.exports = app;
