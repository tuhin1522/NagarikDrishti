import React from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const AuthProvider = ({children}) => {
    return (
        <div>
            <AuthContext value={authInfo}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;