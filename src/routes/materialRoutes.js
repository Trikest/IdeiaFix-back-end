const express = require('express');
const MaterialController = require('../controllers/MaterialController');
const router = express.Router();

const materialController = new MaterialController();

// Criar material
router.post('/', (req, res) => materialController.criarMaterial(req, res));

// Listar todos os materiais
router.get('/', (req, res) => materialController.listarMateriais(req, res));

// Buscar um material por ID
router.get('/:id', (req, res) => materialController.buscarMaterialPorId(req, res));

// Atualizar material
router.put('/:id', (req, res) => materialController.atualizarMaterial(req, res));

// Deletar material
router.delete('/:id', (req, res) => materialController.deletarMaterial(req, res));

module.exports = router;
