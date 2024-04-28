import { UpdateProductService } from "../../data/services/UpdateProduct.service";
import { ProductPrismaRepo } from "../../infra/repositories/PrismaRepo/Product.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { UpdateProductController } from "../../presentation/controllers/UpdateProductController";

export const makeUpdateProductController = (): Controller =>{
    const repo = new ProductPrismaRepo();
    const service = new UpdateProductService(repo);
    const controller = new UpdateProductController(service);
    return controller;
}