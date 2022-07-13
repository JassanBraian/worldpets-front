import React, { useContext } from 'react';
import '../components/entities/publication/cards/ListaCards'
import '../css/common/pages/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import BootstrapCarousel from '../components/common/heroslider/BootstrapCarousel';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from '../components/common/spinner/Spinner';
import CategoryButtons from '../components/common/categoryButtons/CategoryButtons';
import CategoriesContext from '../context/categories/CategoriesContext';
import ListaCards from '../components/entities/publication/cards/ListaCards';

const Home = () => {
    
    const {getCategories} = useContext(CategoriesContext);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
   

    useEffect(() => {
        setLoading(true)
        async function doGetCategories(){
            const categories = await getCategories();
            setLoading(false);
            setCategories(categories);
        }
        
        doGetCategories()
    }, [])

    

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
            {loading ? <Spinner /> :
            categories.map(category => {
                return (
                    <section>
                        <ListaCards key={category.id} title={category.title} posts={category.posts} isHighlighted={category.isHighlighted}/>
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
