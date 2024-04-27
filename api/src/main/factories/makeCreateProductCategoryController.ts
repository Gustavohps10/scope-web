import { CreateProductCategoryService } from "../../data/services/CreateProductCategory.service";
import { ProductCategoryPrismaRepo } from "../../infra/repositories/PrismaRepo/ProductCategory.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { CreateProductCategoryController } from "../../presentation/controllers/CreateProductCategory";

export const makeCreateProductCategoryController = (): Controller => {
    const repo = new ProductCategoryPrismaRepo();
    const service = new CreateProductCategoryService(repo);
    const controller = new CreateProductCategoryController(service);
    return controller
}