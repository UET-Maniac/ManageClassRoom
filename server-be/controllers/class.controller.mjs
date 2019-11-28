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
    let id = parseInt(req.params.id)

    const payload = req.body

    let info = { }

    if(payload.code !== undefined) {
        info.code = payload.code
    }
    if(payload.studentNumber !== undefined) {
        info.studentNumber = payload.studentNumber
    }
    if(payload.semester !== undefined) {
        info.semester = payload.semester
    }
    if(payload.day !== undefined) {
        info.day = dayOfWeek(payload.day)
    }
    if(payload.hourNumber !== undefined) {
        info.hourNumber = payload.hourNumber
    }
    if(payload.startTime !== undefined) {
        info.startTime = payload.startTime + 6
    }
    if(payload.lecturer !== undefined) {
        info.lecturer = payload.lecturer
    }
    if(payload.requireRoom !== undefined) {
        info.requireRoom = payload.requireRoom === "LT" ? "theory" : "practise"
    }
    if(payload.roomCode !== undefined) {
        info.roomCode = payload.roomCode
    }
    if(payload.classSectionCode != undefined) {
        info.classSectionCode = payload.classSectionCode
    }

    ClassHelper.update(id, info).then(result => {
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
            data: null,
            message: "ok"
        })
    })
}

const updateStudentClass = (req, res) => {
    let id = parseInt(req.params.id)

    ClassHelper.update(id, req.body).then(result => {
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
            data: null,
            message: "ok"
        })
    })

}


const removeClass = (req, res) => {
    // Implement me

    res.json({
        success: true,
        data: undefined,
        message: "ok"
    })
}

const getScheduleForUser = (req, res) => {
    // Implement me

    res.json({
        success: true,
        data: undefined,
        message: "ok"
    })
}

const getSchedule = (req, res) => {
    ClassHelper.retriveAll().then(result => {
        if(result.err) {
            console.error(result.err)
            res.json({
                success: false,
                data: null,
                message: "not ok"
            })
            return
        }
        res.json({
            data: result.classes,
            success: true,
            message: "ok"
        })
    })

}

const exportSchedule = (req, res) => {
    // Implement me
    res.json({
        success: true,
        data: undefined,
        message: "ok"
    })
}

const importSchedule = (req, res) => {
    // Implement me

    res.json({
        success: true,
        data: undefined,
        message: "ok"
    })
}

const importStudentClass = (req, res) => {
    // Implement me

    res.json({
        success: true,
        data: undefined,
        message: "ok"
    })
}

const ClassController = {
    createNewClass,
    updateStudentClass,
    exportSchedule,
    getSchedule,
    getScheduleForUser,
    importSchedule,
    importStudentClass,
    removeClass,
    updateInfoClass
}

export default ClassController