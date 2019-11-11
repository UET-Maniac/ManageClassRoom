import * as api from '../api'

export function createAccountSucceeded(account) {
    return {
        type: 'CREATE_ACCOUNT_SUCCEEDED',
        payload: {
            account
        }
    }
}

export function createAccount({username, password, role}) {
    return dispatch => {
        api.createAccount({username, password, role}).then(res => {
            dispatch(createAccountSucceeded(res.data))
        })
    }
}

export function fetchAccountsSucceed(accounts) {
    return {
        type: 'FETCH_ACCOUNTS_SUCCEEDED',
        payload: {
            accounts
        }
    }
}

export function fetchAccounts() {
    return dispatch => {
        api.fetchAccounts().then(res => {
            // console.log(res.data.data)
            dispatch(fetchAccountsSucceed(res.data.data))
        })
    }
}

export function importAccountsSucceeded(data) {
    return {
        type: 'IMPORT_ACCOUNTS_SUCCEEDED',
        payload: data
    }
}

export function importAccounts({formData, role}) {
    if(role === "student") {
        return dispatch => {
            api.importStudentAccount(formData).then(res => {
                dispatch(importAccountsSucceeded(res.data))
            })
        }
    } else {
        return dispatch => {
            api.importLecturerAccount(formData).then(res => {
                dispatch(importAccountsSucceeded(res.data))
            })
        }
    }
}