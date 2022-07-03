import { Link } from 'react-router-dom';
import '../../../../css/common/header/hamburger.css';
import React from 'react';

const Hamburger = (props) => {
    return (
        <>
            <div className='Hamburger' onClick={props.cancel}>
                <div className='hamburgerMenu'>
                    <span className='cancel' onClick={props.cancel}>x</span>

                    <Link to={'/Found'} className='link'>
                        <p style={{ marginTop: "50px" }} onClick={props.cancel}>Found</p>
                    </Link>
                    <Link to={'/UpForAdoption'} className='link'>
                        <p onClick={props.cancel}>Up For Adoption</p>
                    </Link>
                    {/* Missing */}
                    <Link to={'/Missing'} className='link'>
                        <p onClick={props.cancel}>Missing</p>
                    </Link>
                    {/* pettoys */}
                    <Link to={'/pettoys'} className='link'>
                        <p onClick={props.cancel}>Pet Toys</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Hamburger;