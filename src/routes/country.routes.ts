import { AsyncResource } from 'async_hooks'
import { Router } from 'express'
import { CountryController } from '../controllers/country.controller'

export class CountryRoutes {
  router: Router

  constructor() {
    this.router = Router()
    this.configRoutes()
  }

  configRoutes() {
    this.router.get('/getList', async function (req, res, next) {
      const response = await new CountryController().getCountryList()

      res.send(response)
    })
  }
}

export const CountryRouter = new CountryRoutes().router
