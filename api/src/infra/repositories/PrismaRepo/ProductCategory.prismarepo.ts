import { ProductCategoryRepository } from "../../../data/contracts/productCategoryRepository";
import { ProductCategoryDTO } from "../../../data/dto/ProductCategoryDTO";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export class ProductCategoryPrismaRepo implements ProductCategoryRepository{
    async insert(productCategoryProps: ProductCategoryDTO): Promise<void> {
        await prisma.categoria_produto.create({
            data: {
                DS_CATEGORIA_PRODUTO: productCategoryProps.description
            }
        });
    }

    async findById(id: number): Promise<Required<ProductCategoryDTO>> {
        const category = await prisma.categoria_produto.findUniqueOrThrow({
            where: {
                CATEGORIAPRODUTOID: id
            }
        });

        return {
            id: category.CATEGORIAPRODUTOID,
            description: category.DS_CATEGORIA_PRODUTO
        }
    }

    async findAll(): Promise<Required<ProductCategoryDTO[]>> {
        const categories = await prisma.categoria_produto.findMany();
        return categories.map(category => ({
            id: category.CATEGORIAPRODUTOID,
            description: category.DS_CATEGORIA_PRODUTO
        }))
    }

    async edit(productCategoryProps: ProductCategoryDTO): Promise<void> {
        await prisma.categoria_produto.update({
            data: {
                DS_CATEGORIA_PRODUTO: productCategoryProps.description
            },
            where: {
                CATEGORIAPRODUTOID: productCategoryProps.id
            }
        })
    }

    async delete(id: number): Promise<void> {
        await prisma.categoria_produto.delete({
            where: {
                CATEGORIAPRODUTOID: id
            }
        })
    }
}