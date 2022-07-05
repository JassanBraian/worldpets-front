import React from 'react';
import '../components/entities/publication/cards/ListaCards'
import '../css/common/pages/home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import Category from './Category';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Posts from '../components/entities/publication/base/posts';
import { useEffect } from 'react';
import Spinner from '../components/common/spinner/Spinner';
import CategoryButtons from '../components/common/categoryButtons/CategoryButtons';


const data = [
    {
        categoryTitle: "Se perdió",
        posts: [ Posts[0],Posts[1], Posts[2]]
    },
    {
        categoryTitle: "Destacados",
        posts: [ Posts[0],Posts[1], Posts[2]]

    },
    {
        categoryTitle: "En adopción",
        posts: [ Posts[0],Posts[1], Posts[2]]
    }
]

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect( ()=>{
        loadData()
    }, []);
    const loadData= async ()=>{
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false)
        setCategories(data)

    };


    const navigate = useNavigate();
    const goToCategory = ()=>{
      navigate('/Category')
    };

    if(loading){
        return <Spinner />
    }
    return (
        <div>
        {categories.map(cat => {
            return (
            <section>
                <Category title={cat.categoryTitle} posts={cat.posts}/>
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
