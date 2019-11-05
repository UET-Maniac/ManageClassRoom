import ClassSectionHelper from '../helpers/class_section.helper.mjs'

const create = (req, res) => {
    console.log(req.body)
    ClassSectionHelper.create(req.body).then(result => {
        if(result.err) {
            console.error(result)
            res.json({
                success: false,
                data: null,
                message: "not ok!"
            })
            return
        }
        res.json({
            success: true,
            data: result.createdClassSection,
            message: "ok"
        })
    })
}

const getAll = (req, res) => {
    ClassSectionHelper.retrieveAll().then(result => {
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
            data: result.classSections,
            success: true,
            message: "ok"
        })
    })
}

const update = (req, res) => {
    let id = parseInt(req.params.id)
    let infoUpdate = req.body
    ClassSectionHelper.update(id, infoUpdate).then(result => {
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
            success: true,
            data: null,
            message: "ok"
        })
    })
}

const removeByID = (req, res) => {
    let id = parseInt(req.params.id)
    ClassSectionHelper.remove(id).then(result => {
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
            success: true,
            data: null,
            message: "ok"
        })
    })
}

const importClassSections = (req, res) => {
    // Implement me
}

const ClassSectionController = {
    create,
    update,
    getAll,
    removeByID,
    importClassSections
}

export default ClassSectionController