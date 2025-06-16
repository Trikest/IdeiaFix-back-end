/*
  Warnings:

  - You are about to drop the column `area` on the `Orcamento` table. All the data in the column will be lost.
  - The `status` column on the `Orcamento` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `unidadeAltura` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidadeLargura` to the `Orcamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orcamento" DROP COLUMN "area",
ADD COLUMN     "unidadeAltura" TEXT NOT NULL,
ADD COLUMN     "unidadeLargura" TEXT NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "StatusOrcamento" NOT NULL DEFAULT 'PENDENTE';
