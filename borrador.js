import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';
import React from 'react';
import pet1 from '../../../../assets/img/pet1.jpg'
import pet2 from '../../../../assets/img/pet2.jpg'
import pet3 from '../../../../assets/img/pet3.jpg'
import pet4 from '../../../../assets/img/pet4.jpg'

export const Publications = 
    [
    {
        petName: 'tito',
        petDescription: 'cachorro',
        isFavorite: true,
        isHighlighted: true,
        image: pet1,
        id: 1
    },
    {
        petName: 'eyla',
        petDescription: 'negra',
        isFavorite: false,
        isHighlighted: false,
        image: pet2,
        id: 2
    },
    {
        petName: 'mila',
        petDescription: 'adulta',
        isFavorite: false,
        isHighlighted: false,
        image: pet3,
        id: 3
    },
    {
        petName: 'chatran',
        petDescription: 'blanco',
        isFavorite: false,
        isHighlighted: false,
        image: pet4,
        id: 4
    },
    {
        petName: 'chatran',
        petDescription: 'blanco',
        isFavorite: false,
        isHighlighted: false,
        image: pet4,
        id: 5
    },
    {
        petName: 'chatran',
        petDescription: 'blanco',
        isFavorite: false,
        isHighlighted: false,
        image: pet4,
        id: 6
    }
];


const ListaPublicaciones = () => {
    const [publicaciones, setPublicaciones] = useState(Publications);
    const toggle = (i) => {
        setPublicaciones([
            ...publicaciones.slice(0, i),
            {...publicaciones[i], isFavorite: !publicaciones[i].isFavorite},
            ...publicaciones.slice(i + 1),
        ]);
    }
    
  return (
    <section className='container-fluid'>
        <div className='row'>
                 {publicaciones.map((pub, i) => <Card title= {pub.petName} description={pub.petDescription} favorite={pub.isFavorite} image={pub.image} isHighlighted={pub.isHighlighted} onToggleFavorite={() => toggle(i)}/>)}    
        </div>
    </section>
  )
}
export default ListaPublicaciones;