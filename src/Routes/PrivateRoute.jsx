import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    
    if(loading){
        <span className="loading loading-dots loading-sm"></span>
    }
    if(user?.email){
        return children;
    }
    return (
        <Navigate to='/login' replace></Navigate>
    );
};

export default PrivateRoute;