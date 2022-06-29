import { findAllByAltText } from "@testing-library/react";

const categories = [
    {
        name: 'en adopcion',
        activa: true
    },
    {
        name: 'se perdio',
        activa: true
    },
    {
        name: 'lo encontre',
        activa: true
    }

]
function getCategory(name) {
    return categories.find(x => x.name === name)
}
const listaInicial= [
    {
        petName: 'tito',
        petDescription: 'cachorro',
        isFavorite: true,
        isHighlighted: true,
        category: getCategory('en adopcion'), 
        image: pet1
    },
    {
        petName: 'eyla',
        petDescription: 'negra',
        isFavorite: false,
        isHighlighted: false,
        category: getCategory('se perdio'), 
        image: pet2
    },
    {
        petName: 'mila',
        petDescription: 'adulta',
        isFavorite: false,
        isHighlighted: false,
        category: getCategory('lo encontre'), 
        image: pet3
    },
    {
        petName: 'chatran',
        petDescription: 'blanco',
        isFavorite: false,
        isHighlighted: false,
        category: getCategory('en adopcion'), 
        image: pet4
    },
    {
        petName: 'chatran',
        petDescription: 'blanco',
        isFavorite: false,
        isHighlighted: false,
        category: getCategory('lo encontre'),
        image: pet4
    },
    {
        petName: 'chatran',
        petDescription: 'blanco',
        isFavorite: false,
        isHighlighted: false,
        category: getCategory('lo encontre'),
        image: pet4
    }
];
export default listaInicial;
