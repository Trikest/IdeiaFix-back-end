-- CreateEnum
CREATE TYPE "StatusOrcamento" AS ENUM ('PENDENTE', 'CONFIRMADO', 'CANCELADO', 'REJEITADO');

-- AlterTable
ALTER TABLE "Orcamento" ADD COLUMN     "dadosExtras" JSONB,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'PENDENTE';
