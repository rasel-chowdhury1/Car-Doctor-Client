import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        <span className="loading loading-dots loading-sm"></span>
    }
    if(user?.email){
        return children;
    }
    return (
        <Navigate to='/login' state={{from: location}}replace></Navigate>
    );
};

export default PrivateRoute;