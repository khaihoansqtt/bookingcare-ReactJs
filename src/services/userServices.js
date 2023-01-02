import axios from '../axios'

export function handleLoginApi(email, password) {
    return axios.post('/api/login', { email, password })
}

export function getAllUsers(id) {
    return axios.get(`/api/get-all-users?id=${id}`)
}

export function createNewUserInDb(user) {
    return axios.post('/api/create-new-user', user)
}

export function deleteUser(id) {
    return axios.delete('/api/delete-user', { data: { id: id } })
}

export function editUserInDb(user) {
    return axios.put('/api/edit-user', user)
}
