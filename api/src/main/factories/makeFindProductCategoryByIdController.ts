import { FindProductCategoryByIdService } from "../../data/services/FindProductCategoryById.service";
import { ProductCategoryPrismaRepo } from "../../infra/repositories/PrismaRepo/ProductCategory.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { FindProductCategoryController } from "../../presentation/controllers/FindProductCategoryController";

export const makeFindProductCategoryByIdController = (): Controller =>{
    const repo = new ProductCategoryPrismaRepo();
    const service = new FindProductCategoryByIdService(repo);
    const controller = new FindProductCategoryController(service);
    return controller
}