import express from 'express'
import AccountController from '../controllers/account.controller.mjs'
import 'express-group-routes'


const Router = express.Router()

Router.group('/account', r => {
    r.post('/', AccountController.create)
    r.get('/accounts', AccountController.getAll)
    r.put('/:id', AccountController.update)
    r.delete('/:id', AccountController.removeByID)
    // r.post('/import', AccountController.importAccount)
})

export default Router