import { Router } from "express"
import { adaptRoute } from "../adapters/expressRouterAdapter"
import { makeCreateBudgetController } from "../factories/makeCreateBudgetController"

export default (router: Router) =>{
    router.post('/budgets', adaptRoute(makeCreateBudgetController()))
}