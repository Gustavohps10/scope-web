import { FindAllProductCategoriesService } from "../../data/services/FindAllProductCategories.service";
import { ProductCategoryPrismaRepo } from "../../infra/repositories/PrismaRepo/ProductCategory.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { FindAllProductCategoriesController } from "../../presentation/controllers/FindAllProductCategoriesController";

export const makeFindAllProductCategoriesController = (): Controller =>{
    const repo = new ProductCategoryPrismaRepo();
    const service = new FindAllProductCategoriesService(repo);
    const controller = new FindAllProductCategoriesController(service);
    return controller
}