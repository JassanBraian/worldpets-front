import React from 'react';
import CommentProvider from './comment/CommentProvider';

const FatherContext = ({ children }) => {
    return (
        <CommentProvider>
            {/* aqui agregar los demas context uno dentro de otro y se añade el children dentro... */}
            {children}
        </CommentProvider>
    );
};

export default FatherContext;