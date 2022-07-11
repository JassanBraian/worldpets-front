import '../../../../css/common/header/profile.css'
import profileImg from "../../../../assets/img/new.jpeg"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const Profile = () => {
    const [showProfileMenu, setIsShowProfileMenu] = useState(false);

    const showProfileMenuHandler = () => {
        // setIsShowProfileMenu(true);
        setIsShowProfileMenu(prevCheck => !prevCheck);
    }
    const hideHandler = () => {
        setIsShowProfileMenu(false);
    }

    return (
        <>
            <div className='profile__top'>
                <img src={profileImg} alt="profile pic" onClick={showProfileMenuHandler} />
                {
                    showProfileMenu &&
                    <div className='dropdown'>
                        <Link to={'./editprofile'} onClick={hideHandler} className='Link'>
                            <p>Editar Perfil</p>
                        </Link>
                        <Link to={'./mypurchases'} onClick={hideHandler} className='Link'>
                            <p>Mis compras</p>
                        </Link>

                        <p>Salir</p>
                    </div>
                }
            </div>
        </>
    )
}
export default Profile;