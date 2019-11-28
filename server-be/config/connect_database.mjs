import db from './database.mjs'
import Account from '../models/account.pg.mjs'
import Room from '../models/room.pg.mjs'
import ClassSection from '../models/class_section.pg.mjs'
import Class from '../models/class.pg.mjs'
import RequestForm from '../models/request_form.pg.mjs'
import Semester from '../models/semester.pg.mjs'

const connect = () => {
    db.authenticate()
        .then(() => {
            console.log('Connection has been established successfully.')
            Account.sync()
            Semester.sync()
            Room.sync()
            ClassSection.sync()
            Class.sync()
            RequestForm.sync()
            console.log("Has sync tables")
        })
        .catch(err => {
            console.log('Unabale to connect to the database: ', err)
        })
}


export default connect

