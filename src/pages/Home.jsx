import React from 'react';
import '../components/entities/publication/cards/listaPublicaciones'
import '../css/common/pages/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Category from './Category';
import BootstrapCarousel from '../components/common/heroslider/BootstrapCarousel';


const Home = () => {
    return (
        <div>
            <BootstrapCarousel />
            <section>
                <Category title='Destacadas' />
                <button className='seeMoreButton'>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    Ver más
                </button>
            </section>
            <section>
                <Category title='En adopcion' />
                <button className='seeMoreButton'>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    Ver más
                </button>
            </section>
            <section>
                <Category title='Se perdio' />
                <button className='seeMoreButton'>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    Ver más
                </button>
            </section>
            <section>
                <Category title='Lo encontramos' />
                <button className='seeMoreButton'>
                    <FontAwesomeIcon icon={faCirclePlus} />
                    Ver más
                </button>
            </section>
        </div>
    );
};

export default Home;