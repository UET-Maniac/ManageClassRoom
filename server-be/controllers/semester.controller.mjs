import SemesterHelper from '../helpers/semester.helper.mjs'

const create = (req, res) => {
    console.log(req.body)
    SemesterHelper.create(req.body).then(result => {
        if(result.err) {
            console.error(result)
            res.json({
                success: false,
                data: null,
                message: "not ok!"
            })
            return
        }
        console.log(result.createdSemester)
        res.json({
            success: true,
            data: result.createdSemester,
            message: "ok"
        })
    })
}

const getAll = (req, res) => {
    SemesterHelper.retrieveAll().then(result => {
        if(result.err) {
            console.error(result.err)
            res.json({
                success: false,
                data: null,
                message: "not ok"
            })
            return
        }
        console.log(result.semesters)
        res.json({
            data: result.semesters,
            success: true,
            message: "ok"
        })
    })
}

const update = (req, res) => {
    let id = parseInt(req.params.id)
    let infoUpdate = req.body

    SemesterHelper.update(id, infoUpdate).then(result => {
        if(result.err) {
            console.error(result.err)
            res.json({
                success: false,
                data: null,
                message: "not ok"
            })
            return
        }
        console.log('ok')
        res.json({
            success: true,
            data: null,
            message: "ok"
        })
    })
}

const removeByID = (req, res) => {
    let id = parseInt(req.params.id)
    SemesterHelper.remove(id).then(result => {
        if(result.err) {
            console.error(result.err)
            res.json({
                success: false,
                data: null,
                message: "not ok"
            })
            return
        }
        console.log('ok')
        res.json({
            success: true,
            data: null,
            message: "ok"
        })
    })
}

const SemesterController = {
    create,
    update,
    getAll,
    removeByID,
}

export default SemesterController