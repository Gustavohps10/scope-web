/*
  Warnings:

  - You are about to drop the `CATEGORIA_PRODUTO` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CLIENTE` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ORCAMENTO` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ORCAMENTO_ITEM` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PRODUTO` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `USUARIOS` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ORCAMENTO" DROP CONSTRAINT "ORCAMENTO_CLIENTEID_fkey";

-- DropForeignKey
ALTER TABLE "ORCAMENTO_ITEM" DROP CONSTRAINT "ORCAMENTO_ITEM_ORCAMENTOID_fkey";

-- DropForeignKey
ALTER TABLE "ORCAMENTO_ITEM" DROP CONSTRAINT "ORCAMENTO_ITEM_PRODUTOID_fkey";

-- DropForeignKey
ALTER TABLE "PRODUTO" DROP CONSTRAINT "PRODUTO_CATEGORIAPRODUTOID_fkey";

-- DropTable
DROP TABLE "CATEGORIA_PRODUTO";

-- DropTable
DROP TABLE "CLIENTE";

-- DropTable
DROP TABLE "ORCAMENTO";

-- DropTable
DROP TABLE "ORCAMENTO_ITEM";

-- DropTable
DROP TABLE "PRODUTO";

-- DropTable
DROP TABLE "USUARIOS";

-- CreateTable
CREATE TABLE "categoria_produto" (
    "CATEGORIAPRODUTOID" SERIAL NOT NULL,
    "DS_CATEGORIA_PRODUTO" VARCHAR(50) NOT NULL,

    CONSTRAINT "categoria_produto_pkey" PRIMARY KEY ("CATEGORIAPRODUTOID")
);

-- CreateTable
CREATE TABLE "produto" (
    "PRODUTOID" SERIAL NOT NULL,
    "DS_PRODUTO" VARCHAR(50) NOT NULL,
    "OBS_PRODUTO" VARCHAR(300) NOT NULL,
    "VL_VENDA_PRODUTO" DOUBLE PRECISION NOT NULL,
    "DT_CADASTRO_PRODUTO" TIMESTAMP NOT NULL,
    "STATUS_PRODUTO" VARCHAR(10) NOT NULL,
    "CATEGORIAPRODUTOID" INTEGER NOT NULL,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("PRODUTOID")
);

-- CreateTable
CREATE TABLE "cliente" (
    "CLIENTEID" SERIAL NOT NULL,
    "TIPO_CLIENTE" CHAR(1) NOT NULL,
    "CPF_CNPJ_CLIENTE" VARCHAR(18) NOT NULL,
    "NOME_CLIENTE" VARCHAR(100) NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("CLIENTEID")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "ID" SERIAL NOT NULL,
    "USUARIO" VARCHAR(30) NOT NULL,
    "NOME_COMPLETO" VARCHAR(60) NOT NULL,
    "SENHA" VARCHAR(50) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "orcamento" (
    "ORCAMENTOID" SERIAL NOT NULL,
    "DT_ORCAMENTO" TIMESTAMP NOT NULL,
    "DT_VALIDADE_ORCAMENTO" TIMESTAMP NOT NULL,
    "VL_TOTAL_ORCAMENTO" DOUBLE PRECISION NOT NULL,
    "CLIENTEID" INTEGER NOT NULL,

    CONSTRAINT "orcamento_pkey" PRIMARY KEY ("ORCAMENTOID")
);

-- CreateTable
CREATE TABLE "orcamento_item" (
    "ORCAMENTOITEMID" SERIAL NOT NULL,
    "PRODUTODESC" VARCHAR(50) NOT NULL,
    "QT_PRODUTO" DOUBLE PRECISION NOT NULL,
    "VL_UNITARIO" DOUBLE PRECISION NOT NULL,
    "VL_TOTAL" DOUBLE PRECISION NOT NULL,
    "ORCAMENTOID" INTEGER NOT NULL,
    "PRODUTOID" INTEGER NOT NULL,

    CONSTRAINT "orcamento_item_pkey" PRIMARY KEY ("ORCAMENTOITEMID")
);

-- AddForeignKey
ALTER TABLE "produto" ADD CONSTRAINT "produto_CATEGORIAPRODUTOID_fkey" FOREIGN KEY ("CATEGORIAPRODUTOID") REFERENCES "categoria_produto"("CATEGORIAPRODUTOID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orcamento" ADD CONSTRAINT "orcamento_CLIENTEID_fkey" FOREIGN KEY ("CLIENTEID") REFERENCES "cliente"("CLIENTEID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orcamento_item" ADD CONSTRAINT "orcamento_item_ORCAMENTOID_fkey" FOREIGN KEY ("ORCAMENTOID") REFERENCES "orcamento"("ORCAMENTOID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orcamento_item" ADD CONSTRAINT "orcamento_item_PRODUTOID_fkey" FOREIGN KEY ("PRODUTOID") REFERENCES "produto"("PRODUTOID") ON DELETE RESTRICT ON UPDATE CASCADE;
