const prisma = require('./src/config/prisma');

async function testPrisma() {
  try {
    const user = await prisma.usuario.create({
      data: {
        email: 'teste@example.com',
        senha: 'senha123',
        nome: 'Teste Usuário'
      }
    });
    console.log('Usuário criado:', user);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
  }
}

testPrisma();
