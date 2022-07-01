import React from 'react';
import CommentProvider from './comment/CommentProvider';
import AuthState from './auth/AuthState';

const ParentContext = ({ children }) => {
    return (
        <CommentProvider>
            <AuthState>
                {children}
            </AuthState>
        </CommentProvider>
    );
};

export default ParentContext;