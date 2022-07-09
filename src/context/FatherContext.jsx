import React from 'react';
import CategoriesProvider from './categories/CategoriesProvider';
import CommentProvider from './comment/CommentProvider';
import FavoriteProvider from './favorites/FavoriteProvider';

const FatherContext = ({ children }) => {
    return (
        <CommentProvider>
        <FavoriteProvider>
            <CategoriesProvider>
            {/* aqui agregar los demas context uno dentro de otro y se añade el children dentro... */}
            {children}
            </CategoriesProvider>
        </FavoriteProvider>
        </CommentProvider>
    );
};

export default FatherContext;