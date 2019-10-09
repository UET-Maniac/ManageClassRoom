import AccountHelper from '../helpers/account.helper.mjs'

const create = (req, res) => {
    // if (JSON.stringify(req.body) == "{}") {
    //     return res.status(400).json({ Error: "Register request body is empty" });
    //   }
    //   if (!req.body.email || !req.body.username || !req.body.password) {
    //     return res.status(400).json({ Error: "Missing fields for registration" });
    //   }

    AccountHelper.create(req.body).then(result => {
        console.log(result)
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

const AccountController = {
    create,
}
export default AccountController