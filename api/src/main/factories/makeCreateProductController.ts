import { CreateProductService } from "../../data/services/CreateProduct.service";
import { ProductPrismaRepo } from "../../infra/repositories/PrismaRepo/Product.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { CreateProductController } from "../../presentation/controllers/CreateProductController";

export const makeCreateProductController = (): Controller =>{
    const repo = new ProductPrismaRepo();
    const service = new CreateProductService(repo);
    const controller = new CreateProductController(service);
    return controller;
}