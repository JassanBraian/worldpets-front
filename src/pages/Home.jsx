import React, { useContext } from 'react';
import '../components/entities/publication/cards/ListaCards'
import '../css/common/pages/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Category from './Category';
import BootstrapCarousel from '../components/common/heroslider/BootstrapCarousel';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from '../components/common/spinner/Spinner';
import CategoryButtons from '../components/common/categoryButtons/CategoryButtons';
import FavoriteList from '../components/entities/favorites/FavoriteList';
import clientAxios from '../config/axios';
import PublicationContext from '../context/publication/PublicationContext';
import CategoriesContext from '../context/categories/CategoriesContext';

const Home = () => {
    const {publications} = useContext(PublicationContext);
    const {getCategories} = useContext(CategoriesContext);
    const[categories, setCategories] = useState([]);

    useEffect(() => {
        async function doGetCategories(){
            const categories = await getCategories();
            console.log(categories)
            setCategories(categories)
        }
        doGetCategories()
    }, [])

    

    const [loading, setLoading] = useState(false);
    console.log(publications)

    const navigate = useNavigate();
    const goToCategory = (categoryId) => {
        navigate(`/category/${categoryId}`)
    };

    if (loading) {
        return <Spinner />
    }
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
            <FavoriteList />
            {categories.map((category, index) => {
                return (
                    <section>
                        <Category key={index} title={category.title} posts={category.posts} />
                        <button onClick={() => goToCategory(category.id)} className='seeMoreButton'>
                            <FontAwesomeIcon icon={faCirclePlus} />
                            Ver todos
                        </button>
                    </section>
                )
            })}
            <CategoryButtons />
        </div>
    );
};

export default Home;
