import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE
} from './state.types';

const initialState = {
    user:{
        userId:'',
        username:'',
        description:'',
        profileImage:''
    },
    users:[]
}

export const state = (state=initialState,action={}) => {
    let user;
    switch(action.type) {
        case REGISTER_SUCCESS:
            window.location="/login"
            return state;
        case REGISTER_FAILURE:
            return state;
        case LOGIN_SUCCESS:
            window.localStorage.setItem('USE_DASH', action.payload.sessionToken)
            user = state.user;
            user = action.payload.user;
            window.location = "/dashboard"
            return Object.assign({},state,{user})
        case LOGIN_FAILURE:
            return state;
        case LOGOUT_SUCCESS:
            window.localStorage.removeItem('USE_DASH')
            window.location = '/login'
            return state;
        case LOGOUT_FAILURE:
            return state;
        case GET_USER_SUCCESS:
            user = action.payload.user;
            return Object.assign({},state,{user})
        case GET_USER_FAILURE:
            return state;
        case GET_USERS_SUCCESS:
            let users = action.payload.users
            return Object.assign({},state,{users})
        case GET_USERS_FAILURE:
            return state;
        case UPDATE_USER_SUCCESS:
            window.location = '/dashboard'
            return Object.assign({},state,{user})
        case UPDATE_USER_FAILURE:
            return state;
        default: return state;
    }
}