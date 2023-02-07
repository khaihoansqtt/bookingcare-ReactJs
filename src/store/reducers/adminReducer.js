import actionTypes from '../actions/actionTypes'

const initialState = {
    gender: [],
    role: [],
    position: [],

    allUsers: [],
    topDoctors: [],
    allDoctors: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_SUCCESS:
            return {
                ...state,
                isLoadingGender: false,
                gender: action.payload,
            }
        case actionTypes.FETCH_GENDER_FAIL:
            return {
                ...state,
                isLoadingGender: false,
                gender: [],
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            return {
                ...state,
                role: action.payload,
            }
        case actionTypes.FETCH_ROLE_FAIL:
            return {
                ...state,
                isLoadingRole: false,
                role: [],
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            return {
                ...state,
                position: action.payload,
            }
        case actionTypes.FETCH_POSITION_FAIL:
            return {
                ...state,
                isLoadingPosition: false,
                position: [],
            }
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            return {
                ...state,
                allUsers: action.payload,
            }
        case actionTypes.FETCH_ALL_USERS_FAIL:
            return {
                ...state,
                allUsers: [],
            }
        case actionTypes.GET_TOP_DOCTORS_SUCCESS:
            return {
                ...state,
                topDoctors: action.payload,
            }
        case actionTypes.GET_TOP_DOCTORS_FAIL:
            return {
                ...state,
                topDoctors: [],
            }
        case actionTypes.GET_ALL_DOCTORS_SUCCESS:
            return {
                ...state,
                allDoctors: action.payload,
            }
        case actionTypes.GET_ALL_DOCTORS_FAIL:
            return {
                ...state,
                allDoctors: [],
            }
        default:
            return state
    }
}

export default adminReducer
