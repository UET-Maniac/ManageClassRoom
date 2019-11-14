import ClassHelper from '../helpers/class.helper.mjs'
import fs from 'fs'
import XLSX from 'xlsx'
import dayOfWeek from '../utils/day_of_week.mjs'

const createNewClass = (req, res) => {
    const payload = req.body
    const info = {
        code: payload.code,
        studentNumber: payload.studentNumber,
        semester: payload.semester,
        day: dayOfWeek(payload.day),
        startTime: payload.startTime + 6,
        hourNumber: payload.hourNumber,
        lecturer: payload.lecturer,
        requireRoom: payload.requireRoom === "LT" ? "theory" : "practise",
        roomCode: payload.roomCode,
        classSectionCode: payload.classSectionCode
    }
    ClassHelper.create(info).then(result => {
        if(result.err) {
            console.log(result)
            res.json({
                success: false,
                data: null,
                message: "not ok"
            })
            return
        }
        res.json({
            success: true,
            data: result.createdClass,
            message: "ok"
        })
    })
}

const updateInfoClass = (req, res) => {

    res.json({
        success: true,
        data: undefined,
        message: "ok"
    })
}

const addStudentClass = (req, res) => {

    res.json({
        success: true,
        data: undefined,
        message: "ok"
    })
}

const removeStudentFromClass = (req, res) => {

    res.json({
        success: true,
        data: undefined,
        message: "ok"
    })
}

const removeClass = (req, res) => {

    res.json({
        success: true,
        data: undefined,
        message: "ok"
    })
}

const getScheduleForUser = (req, res) => {

    res.json({
        success: true,
        data: undefined,
        message: "ok"
    })
}

const exportSchedule = (req, res) => {

    res.json({
        success: true,
        data: undefined,
        message: "ok"
    })
}

const importSchedule = (req, res) => {

    res.json({
        success: true,
        data: undefined,
        message: "ok"
    })
}

const importStudentClass = (req, res) => {

    res.json({
        success: true,
        data: undefined,
        message: "ok"
    })
}

const ClassController = {
    createNewClass,
    addStudentClass,
    exportSchedule,
    getScheduleForUser,
    importSchedule,
    importStudentClass,
    removeClass,
    removeStudentFromClass,
    updateInfoClass
}

export default ClassController