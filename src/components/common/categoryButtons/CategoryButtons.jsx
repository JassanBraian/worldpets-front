import React from 'react'
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { faShieldDog } from '@fortawesome/free-solid-svg-icons'
import '../../../css/common/categoryButtons/categoryButtons.css'


const CategoryButtons = () => {
    const navigate = useNavigate();
    const goToCategory = (categoryId)=>{
      navigate(`/category/${categoryId}`)
    };
  return (
    <div className='buttonContainer container-fluid row'>
        <button onClick={() => goToCategory('up for adoption')} className='categoryButton col-lg-3  col-sm-12'>
            <FontAwesomeIcon icon={faDog} size="5x"/>
            <div className='button-title'>En Adopción</div>  
        </button>
        <button onClick={() => goToCategory('lost')} className='categoryButton col-lg-3  col-sm-12'>
            <FontAwesomeIcon icon={faPaw} size="5x" />
            <div className='button-title'>Se perdió</div>
        </button>
        <button onClick={() => goToCategory('found')} className='categoryButton col-lg-3 col-sm-12'>
            <FontAwesomeIcon icon={faShieldDog} size="5x"/>
            <div className='button-title'>Lo encontramos</div>
        </button>

    </div>
  )
}

export default CategoryButtons