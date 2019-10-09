import Account from "../models/account.pg.mjs"

const create = async (data) => {
    try {
        let createdAccount = {}
        createdAccount = await Account.create({
            username: data.username,
            password: data.password,
            role: data.role
        })
        
        return {createdAccount, err: undefined}
    } catch(err) {
        return {createdAccount: undefined, err}
    }
}

const AccountHelper = {
    create,
}

export default AccountHelper