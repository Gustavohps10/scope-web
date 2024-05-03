import { ProductCategoryRepository } from "../../../data/contracts/productCategoryRepository";
import { ProductCategoryDTO } from "../../../data/dto/ProductCategoryDTO";
import { PrismaClient } from "@prisma/client";
import { PrismaError } from "../../../main/helpers/PrismaError";
const prisma = new PrismaClient()

export class ProductCategoryPrismaRepo implements ProductCategoryRepository{
    private readonly entityName = "Product Category";

    async insert(productCategoryProps: ProductCategoryDTO): Promise<void> {
        try {
            await prisma.categoria_produto.create({
                data: {
                    DS_CATEGORIA_PRODUTO: productCategoryProps.description
                }
            });
        } catch (error) {
            throw new PrismaError(error, "Failed to create product category", this.entityName)
        }
    }

    async findById(id: number): Promise<Required<ProductCategoryDTO>> {
        try {
            const category = await prisma.categoria_produto.findUniqueOrThrow({
                where: {
                    CATEGORIAPRODUTOID: id
                }
            });
    
            return {
                id: category.CATEGORIAPRODUTOID,
                description: category.DS_CATEGORIA_PRODUTO
            }
        } catch (error) {
            throw new PrismaError(error, "Failed to find product category by Id", this.entityName)
        }
    }

    async findAll(): Promise<Required<ProductCategoryDTO[]>> {
        try {
            const categories = await prisma.categoria_produto.findMany();
            return categories.map(category => ({
                id: category.CATEGORIAPRODUTOID,
                description: category.DS_CATEGORIA_PRODUTO
            }))
        } catch (error) {
            throw new PrismaError(error, "Failed to find all product categories", this.entityName)    
        }
        
    }

    async edit(productCategoryProps: ProductCategoryDTO): Promise<void> {
        try {
            await prisma.categoria_produto.update({
                data: {
                    DS_CATEGORIA_PRODUTO: productCategoryProps.description
                },
                where: {
                    CATEGORIAPRODUTOID: productCategoryProps.id
                }
            })
        } catch (error) {
            throw new PrismaError(error, "Failed to update product category", this.entityName)    
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await prisma.categoria_produto.delete({
                where: {
                    CATEGORIAPRODUTOID: id
                }
            })
        } catch (error) {
            throw new PrismaError(error, "Failed to delete product category", this.entityName)    
        }
        
    }
}