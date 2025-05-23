const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); // ✅ Importação necessária

class AuthController {
    constructor(userService) {
        this.userService = userService;
    }

    async login(req, res) {
        const { email, senha } = req.body;

        try {
            const user = await this.userService.validateCredentials(email, senha);
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token, user: { id: user.id, email: user.email } });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }

    async forgotPassword(req, res) {
        const { email } = req.body;

        try {
            await this.userService.sendPasswordResetEmail(email);
            res.status(200).json({ message: 'E-mail de recuperação enviado com sucesso.' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async resetPassword(req, res) {
        const { token } = req.params;
        const { novaSenha } = req.body;

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const novaSenhaHash = await bcrypt.hash(novaSenha, 10);
            await this.userService.updatePassword(decoded.id, novaSenhaHash);
            return res.status(200).json({ message: 'Senha alterada com sucesso.' });
        } catch (error) {
            console.error('Erro ao verificar token:', error);
            return res.status(400).json({ error: 'Token inválido ou expirado.' });
        }
    }
}

module.exports = AuthController;
