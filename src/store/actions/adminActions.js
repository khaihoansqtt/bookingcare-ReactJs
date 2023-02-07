import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import actionTypes from './actionTypes'
import { userServices } from '../../services'

export function fetchGenderStart() {
    return async (dispatch) => {
        try {
            const response = await userServices.getAllcode('GENDER')
            if (response.data) dispatch(fetchGenderSuccess(response.data))
            else dispatch(fetchGenderFail())
        } catch (error) {
            dispatch(dispatch(fetchGenderFail))
        }
    }
}

export function fetchGenderSuccess(payload) {
    return {
        type: actionTypes.FETCH_GENDER_SUCCESS,
        payload,
    }
}

export function fetchGenderFail() {
    return {
        type: actionTypes.FETCH_GENDER_FAIL,
    }
}
export function fetchRoleStart() {
    return async (dispatch) => {
        try {
            const response = await userServices.getAllcode('ROLE')
            if (response.data) dispatch(fetchRoleSuccess(response.data))
            else dispatch(fetchRoleFail())
        } catch (error) {
            dispatch(dispatch(fetchRoleFail))
        }
    }
}

export function fetchRoleSuccess(payload) {
    return {
        type: actionTypes.FETCH_ROLE_SUCCESS,
        payload,
    }
}

export function fetchRoleFail() {
    return {
        type: actionTypes.FETCH_ROLE_FAIL,
    }
}
export function fetchPositionStart() {
    return async (dispatch) => {
        try {
            const response = await userServices.getAllcode('POSITION')
            if (response.data) dispatch(fetchPositionSuccess(response.data))
            else dispatch(fetchPositionFail())
        } catch (error) {
            dispatch(dispatch(fetchPositionFail))
        }
    }
}

export function fetchPositionSuccess(payload) {
    return {
        type: actionTypes.FETCH_POSITION_SUCCESS,
        payload,
    }
}

export function fetchPositionFail() {
    return {
        type: actionTypes.FETCH_POSITION_FAIL,
    }
}

export function createNewUser(payload) {
    return async function (dispatch) {
        try {
            const response = await userServices.createNewUserInDb(payload)
            if (response.errCode === 0) {
                dispatch(createNewUserSuccess())
                dispatch(fetchAllUsers())
                toast.success('Create new user successfully!')
            } else dispatch(createNewUserFail())
        } catch (error) {
            dispatch(createNewUserFail())
        }
    }
}

export function createNewUserSuccess() {
    return {
        type: actionTypes.CREATE_NEW_USER_SUCCESS,
    }
}
export function createNewUserFail() {
    return {
        type: actionTypes.CREATE_NEW_USER_FAIL,
    }
}

export function fetchAllUsers() {
    return async (dispatch) => {
        try {
            const response = await userServices.getAllUsers('ALL')
            if (response.errCode === 0) {
                dispatch(fetchAllUsersSuccess(response.user))
            } else dispatch(fetchAllUsersFail())
        } catch (error) {
            dispatch(fetchAllUsersFail())
        }
    }
}

export function fetchAllUsersSuccess(payload) {
    return {
        type: actionTypes.FETCH_ALL_USERS_SUCCESS,
        payload,
    }
}
export function fetchAllUsersFail() {
    return {
        type: actionTypes.FETCH_ALL_USERS_FAIL,
    }
}

export function deleteUser(payload) {
    return async (dispatch) => {
        try {
            const response = await userServices.deleteUser(payload)
            if (response.errCode === 0) {
                dispatch(deleteUserSuccess())
                toast.success('Delete user successfully!')
                dispatch(fetchAllUsers())
            } else dispatch(deleteUserFail())
        } catch (error) {
            dispatch(deleteUserFail)
        }
    }
}

export function deleteUserSuccess() {
    return {
        type: actionTypes.DELETE_USER_SUCCESS,
    }
}
export function deleteUserFail() {
    return {
        type: actionTypes.DELETE_USER_FAIL,
    }
}
export function editUser(payload) {
    return async (dispatch) => {
        try {
            const response = await userServices.editUserInDb(payload)
            if (response.errCode === 0) {
                dispatch(editUserSuccess())
                toast.success('Edit user successfully!')
                dispatch(fetchAllUsers())
            } else dispatch(editUserFail())
        } catch (error) {
            dispatch(editUserFail)
        }
    }
}

export function editUserSuccess() {
    return {
        type: actionTypes.EDIT_USER_SUCCESS,
    }
}
export function editUserFail() {
    return {
        type: actionTypes.EDIT_USER_FAIL,
    }
}

export function getTopDoctors(payload) {
    return async (dispatch) => {
        try {
            const response = await userServices.getTopDoctors(payload)
            console.log('check response api top doctors', response)
            if (response.errCode === 0) dispatch(getTopDoctorsSuccess(response.data))
            else dispatch(getTopDoctorsFail())
        } catch (error) {
            console.log(error)
            dispatch(getTopDoctorsFail())
        }
    }
}
export function getTopDoctorsSuccess(payload) {
    return {
        type: actionTypes.GET_TOP_DOCTORS_SUCCESS,
        payload,
    }
}
export function getTopDoctorsFail() {
    return {
        type: actionTypes.GET_TOP_DOCTORS_FAIL,
    }
}

export function getAllDoctors(payload) {
    return async (dispatch) => {
        try {
            const response = await userServices.getAllDoctors(payload)
            console.log('check response api all doctors', response)
            if (response.errCode === 0) dispatch(getAllDoctorsSuccess(response.data))
            else dispatch(getAllDoctorsFail())
        } catch (error) {
            console.log(error)
            dispatch(getAllDoctorsFail())
        }
    }
}
export function getAllDoctorsSuccess(payload) {
    return {
        type: actionTypes.GET_ALL_DOCTORS_SUCCESS,
        payload,
    }
}
export function getAllDoctorsFail() {
    return {
        type: actionTypes.GET_ALL_DOCTORS_FAIL,
    }
}

export function postDetailDoctor(payload) {
    return async (dispatch) => {
        try {
            const response = await userServices.postDetailDoctor(payload)
            console.log('check response api all doctors', response)
            if (response.errCode === 0) {
                dispatch(postDetailDoctorSuccess())
                toast.success('Post detail doctor successfully!')
            } else dispatch(postDetailDoctorFail())
        } catch (error) {
            console.log(error)
            dispatch(postDetailDoctorFail())
        }
    }
}
export function postDetailDoctorSuccess() {
    return {
        type: actionTypes.POST_DETAIL_DOCTOR_SUCCESS,
    }
}
export function postDetailDoctorFail() {
    return {
        type: actionTypes.POST_DETAIL_DOCTOR_FAIL,
    }
}
