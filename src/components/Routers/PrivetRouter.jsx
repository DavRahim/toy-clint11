import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()


    if(loading){
        return (
          <div className="w-full h-screen flex justify-center items-center bg-base-200">
            <div
              className="radial-progress"
              style={{
                "--value": "70",
                "--size": "12rem",
                "--thickness": "2px",
              }}
            >
              70%
            </div>
          </div>
        );
    }
    if(user?.email){
        return children;
    }


    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivetRouter;