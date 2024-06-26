import { Router } from "express"
import { adaptRoute } from "../adapters/expressRouterAdapter"
import { makeCreateBudgetController } from "../factories/makeCreateBudgetController"
import { makeFindAllBudgetsController } from "../factories/makeFindAllBudgetsController"
import { makeFindBudgetByIdController } from "../factories/makeFindBudgetByIdController"
import { makeUpdateBudgetController } from "../factories/makeUpdateBudgetController"
import { makeDeleteBudgetController } from "../factories/makeDeleteBudgetController"
import { makeAddBudgetItemsController } from "../factories/makeAddBudgetItemsController"
import { makeRemoveBudgetItemsController } from "../factories/makeRemoveBudgetItemsController"

export default (router: Router) =>{
    router.get('/budgets', adaptRoute(makeFindAllBudgetsController()))
    router.get('/budgets/:id', adaptRoute(makeFindBudgetByIdController()))
    router.post('/budgets', adaptRoute(makeCreateBudgetController()))
    router.put('/budgets/:id', adaptRoute(makeUpdateBudgetController()))
    router.delete('/budgets/:id', adaptRoute(makeDeleteBudgetController()))
    router.post('/budgets/:id/items', adaptRoute(makeAddBudgetItemsController()))
    router.delete('/budgets/:id/items', adaptRoute(makeRemoveBudgetItemsController()))
}