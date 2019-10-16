import AccountHelper from '../helpers/account.helper.mjs'

const create = (req, res) => {
    // if (JSON.stringify(req.body) == "{}") {
    //     return res.status(400).json({ Error: "Register request body is empty" });
    //   }
    //   if (!req.body.email || !req.body.username || !req.body.password) {
    //     return res.status(400).json({ Error: "Missing fields for registration" });
    //   }

    AccountHelper.create(req.body).then(result => {
        if(result.err) {
            console.error(result.err)
            res.json({
                success: false,
                data: undefined,
                message: "not ok!"
            })
            return
        }
        res.json({
            success: true,
            data: result.createdAccount,
            message: "ok"
        })
    })    

}

const getAll = (req, res) => {

    AccountHelper.retrieveAll().then(result => {
        if(result.err) {
            console.log(result.err)
            res.json({
                success: false,
                data: undefined,
                message: "not ok"
            })
            return
        }
        res.json({
            success: true,
            data: result.accounts,
            message: "ok"
        })
     })
}

const update = (req, res) => {
    
    let id = parseInt(req.params.id)
    let infoUpdate = req.body

    AccountHelper.update(id, infoUpdate).then(result => {
        if(result.err) {
            console.log(result.err)
            res.json({
                success: false,
                data: undefined,
                message: "not ok"
            })
            return
        }
        res.json({
            success: true,
            data: undefined,
            message: "ok"
        })
    })
}

const removeByID = (req, res) => {
    
    let id = parseInt(req.params.id)
    AccountHelper.remove(id).then(result => {
        if(result.err) {
            console.log(result.err)
            res.json({
                success: false,
                data: undefined,
                message: "not ok"
            })
        }
        res.json({
            success: true,
            data: undefined,
            message: "ok"
        })
    })
}

const importAccounts = (req, res) => {
    // Implement me
}

const AccountController = {
    create,
    update,
    getAll,
    removeByID,
    importAccounts
}

export default AccountController