import React from 'react';
import CommentProvider from './comment/CommentProvider';
import AuthState from './auth/AuthState';
import UserProvider from './user/UserProvider';
import PublicationProvider from './publication/PublicationProvider';

const ParentContext = ({ children }) => {
    return (
        <CommentProvider>
            <UserProvider>
            <AuthState>
            <PublicationProvider>
                {children}
            </PublicationProvider>
            </AuthState>
            </UserProvider>
        </CommentProvider>
    );
};

export default ParentContext;