export default function accounts(state={accounts: []}, action) {
    switch (action.type) {
        case 'CREATE_ACCOUNT_SUCCEEDED': {
            return {
                accounts: state.accounts.concat(action.payload.account.data)
            }
        }
        case 'FETCH_ACCOUNTS_SUCCEEDED': {
            return {
                accounts: action.payload.accounts
            }
        }
        case 'IMPORT_ACCOUNTS_SUCCEEDED': {
            // console.log(action.payload)
            if(action.payload.data) {
                return {accounts: state.accounts.concat(action.payload.data)}
            } else {
                return {accounts: state.accounts}
            }
        }
        default: {
            return state
        }
    }
}