/*
  Warnings:

  - Added the required column `dataServico` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horaServico` to the `Orcamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orcamento" ADD COLUMN     "dataServico" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "horaServico" TEXT NOT NULL;
