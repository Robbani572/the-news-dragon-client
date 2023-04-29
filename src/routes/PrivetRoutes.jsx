import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivetRoutes = ({children}) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loading) {
        return <Spinner className='text-center' animation="border" variant="dark" />
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivetRoutes;