import React from 'react';
import '../../../../css/entities/publication/cards/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import pet1 from '../../../../assets/img/pet1.jpg'



const Card = (props) => {
   
  return (
    <>
    <div className='col-lg-3 col-sm-6'>
    <div className= {props.isHighlighted ? "destacada" :"card"}>
        <img src= {props.image} className="card-img-top img-fluid" alt= '' />
        <div className="card-body">
            <h1 className="card-title">{props.title}</h1>  
            <p className="card-text">{props.description}</p>
             {props.favorite ? 
            <button className="favouriteButton" onClick={props.onToggleFavorite}>
            <FontAwesomeIcon icon={faStar} />
                Marcar como favorito
            </button>
            : <button className="favouriteButton" onClick={props.onToggleFavorite}>
            <FontAwesomeIcon size= '1x' icon={faTrashCan} className='mx-2'/>
                Eliminar de mis favoritos
            </button>}
        </div>
    </div>
    </div>
    </>
  )
}

export default Card;