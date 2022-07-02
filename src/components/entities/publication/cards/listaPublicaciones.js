
import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card'
import pet1 from '../../../../assets/img/pet1.jpg'
import pet2 from '../../../../assets/img/pet2.jpg'
import pet3 from '../../../../assets/img/pet3.jpg'
import pet4 from '../../../../assets/img/pet4.jpg'

const listaInicial = [
    {
        petName: 'tito',
        petDescription: 'cachorro',
        isFavorite: true,
        isHighlighted: true,
        image: pet1
    },
    {
        petName: 'eyla',
        petDescription: 'negra',
        isFavorite: false,
        isHighlighted: false,
        image: pet2
    },
    {
        petName: 'mila',
        petDescription: 'adulta',
        isFavorite: false,
        isHighlighted: false,
        image: pet3
    },
    {
        petName: 'chatran',
        petDescription: 'blanco',
        isFavorite: false,
        isHighlighted: false,
        image: pet4
    },
    {
        petName: 'chatran',
        petDescription: 'blanco',
        isFavorite: false,
        isHighlighted: false,
        image: pet4
    },
    {
        petName: 'chatran',
        petDescription: 'blanco',
        isFavorite: false,
        isHighlighted: false,
        image: pet4
    }
];

const ListaPublicaciones = () => {
    const [publicaciones, setPublicaciones] = useState(listaInicial);
    const toggle = (i) => {
        setPublicaciones([
            ...publicaciones.slice(0, i),
            { ...publicaciones[i], isFavorite: !publicaciones[i].isFavorite },
            ...publicaciones.slice(i + 1),
        ]);
    }

    return (
        <section className='container-fluid'>
            <div className='row'>
                {publicaciones.map((pub, i) =>
                    <Card
                        key={i}
                        title={pub.petName}
                        description={pub.petDescription}
                        favorite={pub.isFavorite}
                        image={pub.image}
                        isHighlighted={pub.isHighlighted}
                        onToggleFavorite={() => toggle(i)}
                    />
                )}
            </div>
        </section>
    )
}
export default ListaPublicaciones;