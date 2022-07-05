import React from 'react'
import ListaCards from '../components/entities/publication/cards/ListaCards'
import '../css/common/pages/category.css'


const Category = (props) => {
  return (
    <>
    <h2 className='titulo'>{props.title}</h2>
    <div className='card-group'>
      <ListaCards />
    </div>
    </>
  )
}

export default Category;
