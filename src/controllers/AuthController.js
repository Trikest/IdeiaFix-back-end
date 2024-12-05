
const jwt = require('jsonwebtoken');

class AuthController {
    constructor(userService) {
        this.userService = userService;
    }

    async login(req, res) {
        const { email, senha } = req.body;
        

        try {
            // Validar as credenciais
            const user = await this.userService.validateCredentials(email, senha);

            // Gerar token JWT
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token, user: { id: user.id, email: user.email } });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }
}

module.exports = AuthController;
