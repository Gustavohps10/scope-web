import { FindAllProductsService } from "../../data/services/FindAllProducts.service";
import { ProductPrismaRepo } from "../../infra/repositories/PrismaRepo/Product.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { FindAllProductsController } from "../../presentation/controllers/FindAllProductsController";

export const makeFindAllProductsController = (): Controller => {
    const repo = new ProductPrismaRepo();
    const service = new FindAllProductsService(repo);
    const controller = new FindAllProductsController(service);
    return controller;
}