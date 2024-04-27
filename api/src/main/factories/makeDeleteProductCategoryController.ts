import { DeleteProductCategoryService } from "../../data/services/DeleteProductCategory.service";
import { ProductCategoryPrismaRepo } from "../../infra/repositories/PrismaRepo/ProductCategory.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { DeleteProductCategoryController } from "../../presentation/controllers/DeleteProductCategoryController";

export const makeDeleteProductCategoryController = (): Controller =>{
    const repo = new ProductCategoryPrismaRepo();
    const service = new DeleteProductCategoryService(repo);
    const controller = new DeleteProductCategoryController(service);
    return controller;
}