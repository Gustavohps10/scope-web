import { DeleteProductService } from "../../data/services/DeleteProduct.service";
import { ProductPrismaRepo } from "../../infra/repositories/PrismaRepo/Product.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { DeleteProductController } from "../../presentation/controllers/DeleteProductController";

export const makeDeleteProductController = (): Controller =>{
    const repo = new ProductPrismaRepo();
    const service = new DeleteProductService(repo);
    const controller = new DeleteProductController(service);
    return controller;
}