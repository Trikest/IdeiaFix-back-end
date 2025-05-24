const express = require('express');
const usuarioRoutes = require('./routes/userRoutes'); // Importe as rotas
const authRoutes = require('./routes/authRoutes');
const agendamentosRoutes = require('./routes/AgendamentoRoutes')
const enderecoRoutes = require('./routes/EnderecoRoutes')

const notificacaoRoutes = require('./routes/NotificacaoRoutes')
const app = express();
const cors = require('cors');

// Middleware para trabalhar com JSON
app.use(express.json());

// Conectar as rotas1
app.use(cors());
app.use('/api', usuarioRoutes);
app.use('/agenda', agendamentosRoutes);
app.use('/endere', enderecoRoutes);
app.use('/noti', notificacaoRoutes);
// Rota base será /api/usuarios
app.use('/auth', authRoutes);

module.exports = app;
