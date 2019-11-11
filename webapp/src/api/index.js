import axios from 'axios'

const API_BASE_URL = 'http://localhost:5555/api/v1'

const client = axios.create({
    baseURL: API_BASE_URL,
    header: {
        'Content-Type': 'application/json',
    }
})

const clientForm =  axios.create({
    baseURL: API_BASE_URL,
    header: {
        'Content-Type': 'multipart/form-data',
    }
})

export function fetchAccounts() {
    return client.get('/account/accounts')
}

export function createAccount(payload) {
    return client.post('/account', payload)
}

export function importStudentAccount(payload) {
    return clientForm.post('/account/import/students', payload)
}
export function importLecturerAccount(payload) {
    return clientForm.post('/account/import/lecturers', payload)
}