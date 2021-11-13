import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

// Components
import Landing from '../Views/Landing';
import Register from '../Views/Register';
import Login from '../Views/Login';
import Dashboard from '../Views/Dashboard';
import Users from '../Views/Users';
import ViewProfile from '../Views/ViewProfile';
import EditProfile from '../Views/EditProfile';
import PrivateRoute from './PrivateRoute';
import isAuthenticated from '../utils/isAuthenticated';

const AppRouter = () => {
    return (
        <>
                <Routes>
                    <Route exact path="/" element={isAuthenticated()?<Navigate to='/dashboard'/>:<Landing/>} />
                    <Route path="/register" element={isAuthenticated()?<Navigate to='/dashboard'/>:<Register/>} />
                    <Route path="/login" element={isAuthenticated()?<Navigate to='/dashboard'/>:<Login/>} />
                    <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
                    <Route path="/users" element={<PrivateRoute><Users/></PrivateRoute>} />
                    <Route path="/edit" element={<PrivateRoute><EditProfile/></PrivateRoute>} />
                </Routes>
        </>
    )
}

export default AppRouter
