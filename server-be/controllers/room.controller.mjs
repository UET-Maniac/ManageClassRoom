import RoomHelper from '../helpers/room.helper.mjs'

const create = (req, res) => {
    console.log(req.body)
    RoomHelper.create(req.body).then(result => {
        if(result.err) {
            console.error(result)
            res.json({
                success: false,
                data: null,
                message: "not ok!"
            })
            return
        }
        console.log(result.createdRoom)
        res.json({
            success: true,
            data: result.createdRoom,
            message: "ok"
        })
    })
}

const getAll = (req, res) => {
    RoomHelper.retrieveAll().then(result => {
        if(result.err) {
            console.error(result.err)
            res.json({
                success: false,
                data: null,
                message: "not ok"
            })
            return
        }
        console.log(result.rooms)
        res.json({
            data: result.rooms,
            success: true,
            message: "ok"
        })
    })
}

const update = (req, res) => {
    let id = parseInt(req.params.id)
    let infoUpdate = req.body

    RoomHelper.update(id, infoUpdate).then(result => {
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
    RoomHelper.remove(id).then(result => {
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

const importRooms = (req, res) => {
    // Implement me
}

const RoomController = {
    create,
    update,
    getAll,
    removeByID,
    importRooms
}

export default RoomController