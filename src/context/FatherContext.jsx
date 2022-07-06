import React from 'react';
import CommentProvider from './comment/CommentProvider';
import PublicationProvider from './publication/PublicationProvider';

const FatherContext = ({ children }) => {
    return (
        <CommentProvider>
            {/* aqui agregar los demas context uno dentro de otro y se añade el children dentro... */}
            <PublicationProvider>
                 {children}
            </PublicationProvider>
        </CommentProvider>
    );
};

export default FatherContext;