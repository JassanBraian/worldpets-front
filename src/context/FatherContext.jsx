import React from 'react';
import CommentProvider from './comment/CommentProvider';
import FavoriteProvider from './favorites/FavoriteProvider';

const FatherContext = ({ children }) => {
    return (
        <CommentProvider>
        <FavoriteProvider>
            {/* aqui agregar los demas context uno dentro de otro y se añade el children dentro... */}
            {children}
        </FavoriteProvider>
        </CommentProvider>
    );
};

export default FatherContext;