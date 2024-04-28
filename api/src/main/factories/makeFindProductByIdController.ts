import { FindProductByIdService } from "../../data/services/FindProductById.service";
import { ProductPrismaRepo } from "../../infra/repositories/PrismaRepo/Product.prismarepo";
import { Controller } from "../../presentation/contracts/controller";
import { FindProductByIdController } from "../../presentation/controllers/FindProductByIdController";

export const makeFindProductByIdController = (): Controller =>{
    const repo = new ProductPrismaRepo();
    const service = new FindProductByIdService(repo);
    const controller = new FindProductByIdController(service);
    return controller;
}