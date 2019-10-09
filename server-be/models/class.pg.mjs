/**
//  * Table Schema: Class
//  * ID               auto
//  * Code             string
//  * StudentNumber    number
//  * ClassSectionID   foreignKey
//  * RoomID           foreignKey
//  * Semester         string
//  * Day              number(enum: Day of week)
//  * StartTime        number
//  * HourNumber       number
//  * RequireRoom      string(enum)
//  * Students         array<string> (studentCode = username)
//  * Lecturer         string (LecturerCode = username)
//  */

import Sequelize from 'sequelize'
import db from '../config/database.mjs'

const Class = db.define('classes', {
    code: {

    },
    name: {

    },
    studentNumber: {

    },
    semester: {

    },
    day: {

    },
    startTime: {

    },
    hourNumber: {

    },
    students: {

    },
    lecturer: {

    },
    requireRoom: {

    },
    roomID: {

    },
    classSectionID: {

    }
})

export default Class