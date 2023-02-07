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

export function getAllcode(type) {
    return axios.get(`api/allcode?type=${type}`)
}

export function getTopDoctors(limit) {
    return axios.get(`api/top-doctor-home?limit=${limit}`)
}
export function getAllDoctors() {
    return axios.get(`api/get-all-doctors`)
}

export function postDetailDoctor(body) {
    return axios.post('/api/post-detail-doctor', body)
}

export function getDetailDoctor(doctorId) {
    return axios.get(`/api/get-detail-doctor-by-id?doctorId=${doctorId}`)
}
