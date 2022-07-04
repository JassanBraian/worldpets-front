import React from 'react';
import CommentProvider from './comment/CommentProvider';
import AuthState from './auth/AuthState';
import UserProvider from './user/UserProvider';

const ParentContext = ({ children }) => {
    return (
        <CommentProvider>
            <UserProvider>
            <AuthState>
                {children}
            </AuthState>
            </UserProvider>
        </CommentProvider>
    );
};

export default ParentContext;