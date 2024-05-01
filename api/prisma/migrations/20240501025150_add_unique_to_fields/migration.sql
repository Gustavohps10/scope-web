/*
  Warnings:

  - A unique constraint covering the columns `[CPF_CNPJ_CLIENTE]` on the table `cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[USUARIO]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "usuarios" ALTER COLUMN "SENHA" SET DATA TYPE VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "cliente_CPF_CNPJ_CLIENTE_key" ON "cliente"("CPF_CNPJ_CLIENTE");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_USUARIO_key" ON "usuarios"("USUARIO");
