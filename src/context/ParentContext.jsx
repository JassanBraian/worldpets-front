import React from 'react';
import CommentProvider from './comment/CommentProvider';
import AuthState from './auth/AuthState';
import UserProvider from './user/UserProvider';
import PublicationProvider from './publication/PublicationProvider';
import FavoriteProvider from './favorites/FavoriteProvider';

const ParentContext = ({ children }) => {
    return (
        <CommentProvider>
            <UserProvider>
            <AuthState>
            <PublicationProvider>
            <FavoriteProvider>
                {children}
                </FavoriteProvider>
            </PublicationProvider>
            </AuthState>
            </UserProvider>
        </CommentProvider>
    );
};

export default ParentContext;