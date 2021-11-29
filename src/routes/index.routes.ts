import express from 'express'
import jwt from 'jsonwebtoken'
import { serverSecret } from '../utils/constants'
import { CountryRouter } from './country.routes'

export class IndexRoute {
  router: express.Router

  constructor() {
    this.router = express.Router()
    this.setRoutes()
  }

  setRoutes() {
    // Default Route
    this.router.get('/', function (req, res, next) {
      res.redirect('/api-docs')
    })

    this.router.use('/countries', CountryRouter)
  }

  /**
   * Format of the token is
   * Bearer <acessToken>
   */
  verifyToken(req: any, res: any, next: any) {
    // Get the Auth Header
    const bearerHeader = req.headers['authorization']

    if (bearerHeader !== undefined) {
      console.log(bearerHeader)

      const bearer = bearerHeader.split(' ')

      const bearerToken = bearer[1]

      req.token = bearerToken

      next()
    } else {
      console.log(bearerHeader)

      res.sendStatus(403)
    }
  }
}

export const MainRouter = new IndexRoute().router
