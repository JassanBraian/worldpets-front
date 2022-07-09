import React from 'react';
import '../components/entities/publication/cards/ListaCards'
import '../css/common/pages/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Category from './Category';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Spinner from '../components/common/spinner/Spinner';
import CategoryButtons from '../components/common/categoryButtons/CategoryButtons';
import FavoriteList from '../components/entities/favorites/FavoriteList';
import clientAxios from '../config/axios';

const Home = () => {
   
    const [loading, setLoading] = useState(false);

    
    const navigate = useNavigate();
    const goToCategory = ()=>{
      navigate('/Category')
    };

    if(loading){
        return <Spinner />
    }
    return (
        <div>
        <FavoriteList />
        {publications.map((publication, index) => {
            return (
            <section>
                <Category key={index} title={publication.category} posts={publication} />
                <button onClick={goToCategory} className='seeMoreButton'>
                <FontAwesomeIcon icon={faCirclePlus} />
                Ver todos
                </button>
            </section>
            )
        })}
        <CategoryButtons/>
        </div>
    );
};

export default Home;
