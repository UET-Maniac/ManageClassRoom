import express from 'express'
import AccountController from '../controllers/account.controller.mjs'
import 'express-group-routes'


const Router = express.Router()

Router.group('/account', r => {
    r.post('/', AccountController.create)
})

export default Router