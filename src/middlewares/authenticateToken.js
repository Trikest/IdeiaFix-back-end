const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const authenticateToken = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ error: 'Token not provided' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await prisma.usuario.findUnique({
            where: { id: decoded.id },
            include: { Funcionario: true, Cliente: true } // <- você pode incluir mais se precisar
        });

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        req.user = user; // agora você tem tudo que precisa
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
};

module.exports = authenticateToken;
