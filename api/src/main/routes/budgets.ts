import { Router } from "express"
import { adaptRoute } from "../adapters/expressRouterAdapter"
import { makeCreateBudgetController } from "../factories/makeCreateBudgetController"
import { makeFindAllBudgetsController } from "../factories/makeFindAllBudgetsController"
import { makeFindBudgetByIdController } from "../factories/makeFindBudgetByIdController"
import { makeUpdateBudgetController } from "../factories/makeUpdateBudgetController"
import { makeDeleteBudgetController } from "../factories/makeDeleteBudgetController"

export default (router: Router) =>{
    router.get('/budgets', adaptRoute(makeFindAllBudgetsController()))
    router.get('/budgets/:id', adaptRoute(makeFindBudgetByIdController()))
    router.post('/budgets', adaptRoute(makeCreateBudgetController()))
    router.put('/budgets', adaptRoute(makeUpdateBudgetController()))
    router.delete('/budgets/:id', adaptRoute(makeDeleteBudgetController()))
}