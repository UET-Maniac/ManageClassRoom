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

const retrieveAll = async () => {
    try {
        const accounts = await Account.findAll()
        return {accounts: accounts, err: undefined}
    } catch (err) {
        return {err, accounts: undefined}
    }
}


const update = async (id, data) => {
    try {
        const account = await Account.findByPk(id)
        if(account == null) {
            return {err: new Error("Not exist account id")}
        } else {
            let ok = account.update(data)
            if(!ok) {
                return {err: new Error("Invalid")}
            }
            return {err: undefined}
        }
    } catch(err) {
        return {err}
    }
}

const remove = async (id) => {
    try {
        const account = await Account.findByPk(id)
        if(account == null) {
            return {err: new Error("Not exist account id")}
        } else {
            let ok = account.destroy({force: true})
            if(!ok) {
                return {err: new Error("Invalid")}
            }
            return {err: undefined}
        }
    } catch(err) {
        return {err}
    }
}

const createMulti = async (accounts) => {
    // Implement me
}

const AccountHelper = {
    create,
    update,
    remove,
    retrieveAll,
    createMulti
}

export default AccountHelper