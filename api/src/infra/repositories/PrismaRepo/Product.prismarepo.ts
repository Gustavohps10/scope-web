import { ProductRepository } from "../../../data/contracts/productRepository";
import { ProductDTO } from "../../../data/dto/ProductDTO";
import { PrismaClient } from "@prisma/client";
import { PrismaError } from "../../../main/helpers/PrismaError";
const prisma = new PrismaClient();

export class ProductPrismaRepo implements ProductRepository {
    private readonly entityName = "Product";

    async insert(productProps: ProductDTO): Promise<void> {
        try {
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
        } catch (error) {
            throw new PrismaError(error, "Failed to create product", this.entityName);
        }
    }

    async findAll(): Promise<Required<ProductDTO[]>> {
        try {
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
        } catch (error) {
            throw new PrismaError(error, "Failed to find all products", this.entityName);
        }
    }

    async findById(id: number): Promise<Required<ProductDTO>> {
        try {
            const product = await prisma.produto.findUniqueOrThrow({
                where: {
                    PRODUTOID: id
                }
            })
            return {
                id: product.PRODUTOID,
                description: product.DS_PRODUTO,
                observation: product.OBS_PRODUTO,
                saleValue: product.VL_VENDA_PRODUTO,
                status: product.STATUS_PRODUTO as "ACTIVE" | "INACTIVE",
                createdAt: product.DT_CADASTRO_PRODUTO,
                categoryId: product.CATEGORIAPRODUTOID
            }
        } catch (error) {
            throw new PrismaError(error, "Failed to find product by id", this.entityName);
        }
    }

    async edit(productProps: ProductDTO): Promise<void> {
        try {
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
        } catch (error) {
            throw new PrismaError(error, "Failed to update product", this.entityName);
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await prisma.produto.delete({
                where:{
                    PRODUTOID: id
                }
            })
        } catch (error) {
            throw new PrismaError(error, "Failed to delete product", this.entityName);
        }
        
    }
}