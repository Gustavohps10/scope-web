import { Router } from "express"
import { adaptRoute } from "../adapters/expressRouterAdapter"
import { makeCreateBudgetController } from "../factories/makeCreateBudgetController"
import { makeFindAllBudgetsController } from "../factories/makeFindAllBudgetsController"

export default (router: Router) =>{
    router.get('/budgets', adaptRoute(makeFindAllBudgetsController()))
    router.post('/budgets', adaptRoute(makeCreateBudgetController()))
}