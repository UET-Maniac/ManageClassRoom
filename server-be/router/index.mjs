import express from 'express'
import AccountController from '../controllers/account.controller.mjs'
import 'express-group-routes'
import RoomController from '../controllers/room.controller.mjs'
import ClassSectionController from '../controllers/class_section.controller.mjs'
import ClassController from '../controllers/class.controller.mjs'
import SemesterController from '../controllers/semester.controller.mjs'
// import RequestFormController from '../controllers/request_form.controller.mjs'
import AccessController from '../controllers/access.controller.mjs'
import authentication from '../middleware/authentication.mjs'

const Router = express.Router()

Router.group('/account', r => {
    r.post('/', authentication.checkToken,  AccountController.create)
    r.get('/accounts', authentication.checkToken, AccountController.getAll)
    r.put('/:id', authentication.checkToken, AccountController.update)
    r.delete('/:id', authentication.checkToken, AccountController.removeByID)
    r.post('/import/students', authentication.checkToken, AccountController.importStudentAccounts)
    r.post('/import/lecturers', authentication.checkToken, AccountController.importLecturerAccounts)

})


Router.group('/room', r => {
    r.post('/', authentication.checkToken, RoomController.create)
    r.get('/rooms', authentication.checkToken , RoomController.getAll)
    r.put('/:id', authentication.checkToken, RoomController.update)
    r.delete('/:id', authentication.checkToken, RoomController.removeByID)
    r.post('/import', authentication.checkToken, RoomController.importRooms)
})

Router.group('/class-section', r => {
    r.post('/', authentication.checkToken, ClassSectionController.create)
    r.get('/class-sections', authentication.checkToken, ClassSectionController.getAll)
    r.put('/:id', authentication.checkToken, ClassSectionController.update)
    r.delete('/:id', authentication.checkToken, ClassSectionController.removeByID)
    r.post('/import', authentication.checkToken, ClassSectionController.importClassSections)
})


Router.group('/class', r => {
    r.post('/', authentication.checkToken, ClassController.createNewClass)
    r.get('/', authentication.checkToken, ClassController.getSchedule)
    r.put('/info/:id', authentication.checkToken, ClassController.updateInfoClass)
    r.put('/student/:id', authentication.checkToken, ClassController.updateStudentClass)
    r.delete('/:id', authentication.checkToken, ClassController.removeClass)
})

Router.group('/schedule', r => {
    r.post('/', authentication.checkToken, ClassController.getScheduleForUser)
})

Router.group('/semester', r => {
    r.post('/', authentication.checkToken, SemesterController.create)
    r.get('/semesters', authentication.checkToken, SemesterController.getAll)
    r.put('/:id', authentication.checkToken, SemesterController.update)
    r.delete('/:id', authentication.checkToken, SemesterController.removeByID)

})

Router.post('/login', AccessController.login)

// Router.group('/request', r => {
//     r.post('/'. RequestFormController.create)
//     r.put('/info', RequestFormController.update)
//     r.get('/filter', RequestFormController.filter)
//     r.put('/process', RequestFormController.process)
//     r.delete('/', RequestFormController.remove)
// })

export default Router