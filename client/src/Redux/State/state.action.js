import axios from 'axios';
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

let sessionToken = window.localStorage.getItem('USE_DASH');

export const registerUser = (registerData) => dispatch => {
    console.log(`registerData: ${registerData}`);
    axios
    .post('http://localhost:5500/auth/register',
    {
        email:registerData.email,
        username:registerData.username,
        password:registerData.password
    })
    .then(response => {
        dispatch({
            type: REGISTER_SUCCESS
        })
    })
    .catch(err => {
        dispatch({
            type: REGISTER_FAILURE
        })
    })
}

export const loginUser = (loginData) => dispatch => {
    let sessionToken;
    axios
    .post('http://localhost:5500/auth/login',
    {
        email:loginData.email,
        password:loginData.password
    })
    .then(response => {
        sessionToken = response.data.sessionToken
        dispatch({
            type:LOGIN_SUCCESS,
            payload:{
                sessionToken:response.data.sessionToken,
                userId:response.data.userId
            }
        })
    })
    .catch(err => {
        dispatch({
            type:LOGIN_FAILURE
        })
    })
}

export const logoutUser = () => dispatch => {
    axios
    .post('http://localhost:5500/auth/logout', {
        sessionToken: sessionToken
    })
    .then(response => {
        dispatch({
            type: LOGOUT_SUCCESS
        })
    })
    .catch(err => {
        dispatch({
            type: LOGOUT_FAILURE
        })
    })
}

export const getUser = () => dispatch => {
    axios
    .get(`http://localhost:5500/user/user`,
    {
        headers: {
            'authentication': sessionToken
        }
    })
    .then(response => {
        dispatch({
            type: GET_USER_SUCCESS,
            payload: {
                user:response.data.user
            }
        })
    })
    .catch(err => {
        dispatch({
            type: GET_USER_FAILURE
        })
    })
    
}

export const getUsers = () => dispatch => {
    axios
    .get(`http://localhost:5500/user/users`,
    {
        headers: {
            'authentication': sessionToken
        }
    })
    .then(response => {
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: {
                users:response.data.users
            }
        })
    })
    .catch(err => {
        dispatch({
            type: GET_USERS_FAILURE
        })
    })   
}

export const updateUser = (updateData) => dispatch => {
    axios
    .put('http://localhost:5500/user/update',{
        authentication:sessionToken,
        userData:updateData
    })
    .then(response => {
        dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: {
                user:response.data.user
            }
        })
    })
    .catch(err => {
        dispatch({
            type: UPDATE_USER_FAILURE
        })
    })
}