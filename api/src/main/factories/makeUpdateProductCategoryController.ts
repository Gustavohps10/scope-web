import { UpdateProductCategoryService } from "../../data/services/UpdateProductCategory.service";
import { ProductCategoryPrismaRepo } from "../../infra/repositories/PrismaRepo/ProductCategory.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { UpdateProductCategoryController } from "../../presentation/controllers/UpdateProductCategoryController";

export const makeUpdateProductCategoryController = (): Controller =>{
    const repo = new ProductCategoryPrismaRepo();
    const service = new UpdateProductCategoryService(repo);
    const controller = new UpdateProductCategoryController(service);
    return controller;
}