import axios from 'axios'

const API_BASE_URL = 'http://localhost:5555/api/v1'

const client = axios.create({
    baseURL: API_BASE_URL,
    header: {
        'Content-Type': 'application/json',
    }
})

export function fetchAccounts() {
    return client.get('/account/accounts')
}

export function createAccount(payload) {
    return client.post('/account', payload)
}