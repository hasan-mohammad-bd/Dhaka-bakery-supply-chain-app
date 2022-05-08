import React, { Children } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {
    const location = useLocation()
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    if(loading){
       return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    else{
        return children;
    }
    
};

export default RequireAuth;