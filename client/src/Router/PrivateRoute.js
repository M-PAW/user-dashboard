import React from 'react';
import { Navigate } from 'react-router-dom';
import isAuthenticated from '../utils/isAuthenticated';
const PrivateRoute = ({children}) => {
    return isAuthenticated()?children:<Navigate to="/login" />
}

/**
 * Built By MPAW
 * https://github.com/M-PAW
 */

export default PrivateRoute
