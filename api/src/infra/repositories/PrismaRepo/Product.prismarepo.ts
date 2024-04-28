import { ProductRepository } from "../../../data/contracts/productRepository";
import { ProductDTO } from "../../../data/dto/ProductDTO";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class ProductPrismaRepo implements ProductRepository {
    async insert(productProps: ProductDTO): Promise<void> {
        await prisma.produto.create({
            data: {
                DS_PRODUTO: productProps.description,
                OBS_PRODUTO: productProps.observation,
                VL_VENDA_PRODUTO: productProps.saleValue,
                DT_CADASTRO_PRODUTO: productProps.createdAt,
                STATUS_PRODUTO: productProps.status,
                CATEGORIA: {
                    connect:{
                        CATEGORIAPRODUTOID: productProps.categoryId
                    }
                }
            }
        });
    }

    async findAll(): Promise<Required<ProductDTO[]>> {
      const products = await prisma.produto.findMany()
      return products.map(product => ({
        id: product.PRODUTOID,
        description: product.DS_PRODUTO,
        observation: product.OBS_PRODUTO,
        saleValue: product.VL_VENDA_PRODUTO,
        status: product.STATUS_PRODUTO as "ACTIVE" | "INACTIVE",
        createdAt: product.DT_CADASTRO_PRODUTO,
        categoryId: product.CATEGORIAPRODUTOID
      }));  
    }

    async findById(id: number): Promise<Required<ProductDTO>> {
        const product = await prisma.produto.findFirstOrThrow();
        return {
            id: product.PRODUTOID,
            description: product.DS_PRODUTO,
            observation: product.OBS_PRODUTO,
            saleValue: product.VL_VENDA_PRODUTO,
            status: product.STATUS_PRODUTO as "ACTIVE" | "INACTIVE",
            createdAt: product.DT_CADASTRO_PRODUTO,
            categoryId: product.CATEGORIAPRODUTOID
        }
    }

    async edit(productProps: ProductDTO): Promise<void> {
        await prisma.produto.update({
            where:{
                PRODUTOID: productProps.id
            },
            data: {
                DS_PRODUTO: productProps.description,
                OBS_PRODUTO: productProps.observation,
                VL_VENDA_PRODUTO: productProps.saleValue,
                DT_CADASTRO_PRODUTO: productProps.createdAt,
                STATUS_PRODUTO: productProps.status,
                CATEGORIA: {
                    connect:{
                        CATEGORIAPRODUTOID: productProps.categoryId
                    }
                }
            }  
        })
    }

    async delete(id: number): Promise<void> {
        await prisma.produto.delete({
            where:{
                PRODUTOID: id
            }
        })
    }
}