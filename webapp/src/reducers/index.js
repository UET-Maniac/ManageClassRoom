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
        default: {
            return state
        }
    }
}