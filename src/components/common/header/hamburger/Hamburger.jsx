import { Link } from 'react-router-dom';
import '../../../../css/common/header/hamburger.css';
import * as FaIcons from "react-icons/fa";
import React from 'react';
import { AiFillHome } from "react-icons/ai";

const Hamburger = (props) => {
    return (
        <>
            <div className='Hamburger'>
                <div className='hamburgerMenu'>
                    <span className='cancel' onClick={props.cancel}>x</span>

                    <Link to={'/'} className='link-home'>
                        <AiFillHome className='home-icon' />
                        <p onClick={props.cancel}>Home</p>
                    </Link>

                    <h6>Categorias</h6>
                    <hr className='solid'></hr>
                    <Link to={'/Found'} className='link'>
                        <p onClick={props.cancel}>Encontrado</p>
                    </Link>
                    <Link to={'/UpForAdoption'} className='link'>
                        <p onClick={props.cancel}>En adopción</p>
                    </Link>
                    <Link to={'/Missing'} className='link'>
                        <p onClick={props.cancel}>Perdido</p>
                    </Link>
                    <h6 className='divider'>Administración</h6>
                    <hr className='solid'></hr>
                    <Link to={'/comment'} className='link'>
                        <p onClick={props.cancel}>Comentarios</p>
                    </Link>
                    <Link to={'/user'} className='link'>
                        <p onClick={props.cancel}>Usuarios</p>
                    </Link>
                    <Link to={'/publications'} className='link'>
                        <p onClick={props.cancel}>Publicaciones</p>
                    </Link>
                    <Link to={'/fav'} className='link'>
                        <p onClick={props.cancel}>Favoritos</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Hamburger;