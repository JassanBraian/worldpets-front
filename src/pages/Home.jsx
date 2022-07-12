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
    
    const {getCategories, getHighlightedPosts} = useContext(CategoriesContext);
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
            {categories.map((category, index) => {
                return (
                    <section>
                        <Category key={category} title={category.title} posts={category.posts} />
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
