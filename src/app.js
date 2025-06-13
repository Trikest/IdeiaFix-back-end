const express = require('express');
const usuarioRoutes = require('./routes/userRoutes'); // Importe as rotas
const authRoutes = require('./routes/authRoutes');
const agendamentosRoutes = require('./routes/AgendamentoRoutes')
const enderecoRoutes = require('./routes/EnderecoRoutes')
const serviceRoutes = require('./routes/servicoRoutes');
const materialRoutes = require('./routes/materialRoutes');
const orcamentoRoutes = require('./routes/orcamentoRoutes');
const notificacaoRoutes = require('./routes/NotificacaoRoutes')
const funcionarioRoutes = require('./routes/funcionarioRoutes')
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
app.use('/services', serviceRoutes);
app.use('/materials', materialRoutes);
app.use('/orcamento', orcamentoRoutes);
app.use('/funcio',funcionarioRoutes);
// Rota base será /api/usuarios
app.use('/auth', authRoutes);

module.exports = app;
