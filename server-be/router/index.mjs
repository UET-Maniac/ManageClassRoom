import express from 'express'
import AccountController from '../controllers/account.controller.mjs'
import 'express-group-routes'
import RoomController from '../controllers/room.controller.mjs'
import ClassSectionController from '../controllers/class_section.controller.mjs'
import ClassController from '../controllers/class.controller.mjs'
import SemesterController from '../controllers/semester.controller.mjs'
import RequestFormController from '../controllers/request_form.controller.mjs'

const Router = express.Router()

Router.group('/account', r => {
    r.post('/', AccountController.create)
    r.get('/accounts', AccountController.getAll)
    r.put('/:id', AccountController.update)
    r.delete('/:id', AccountController.removeByID)
    r.post('/import/students', AccountController.importStudentAccounts)
    r.post('/import/lecturers', AccountController.importLecturerAccounts)

})


Router.group('/room', r => {
    r.post('/', RoomController.create)
    r.get('/rooms', RoomController.getAll)
    r.put('/:id', RoomController.update)
    r.delete('/:id', RoomController.removeByID)
    r.post('/import', RoomController.importRooms)
})

Router.group('/class-section', r => {
    r.post('/', ClassSectionController.create)
    r.get('/class-sections', ClassSectionController.getAll)
    r.put('/:id', ClassSectionController.update)
    r.delete('/:id', ClassSectionController.removeByID)
    r.post('/import', ClassSectionController.importClassSections)
})


Router.group('/class', r => {
    r.post('/', ClassController.createNewClass)
    r.get('/', ClassController.getSchedule)
    r.put('/info/:id', ClassController.updateInfoClass)
    r.put('/student/:id', ClassController.updateStudentClass)
    r.delete('/:id', ClassController.removeClass)
})

Router.group('/schedule', r => {
    r.post('/', ClassController.getScheduleForUser)
})

Router.group('/semester', r => {
    r.post('/', SemesterController.create)
    r.get('/semesters', SemesterController.getAll)
    r.put('/:id', SemesterController.update)
    r.delete('/:id', SemesterController.removeByID)

})

Router.group('/request', r => {
    r.post('/'. RequestFormController.create)
    r.put('/info', RequestFormController.update)
    r.get('/filter', RequestFormController.filter)
    r.put('/process', RequestFormController.process)
    r.delete('/', RequestFormController.remove)
})

export default Router