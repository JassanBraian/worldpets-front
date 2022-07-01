import React from 'react'
import ListaPublicaciones from '../components/entities/publication/cards/listaPublicaciones'
import '../css/common/pages/category.css'

const Category = (props) => {
  return (
    <>
    <h2 className='titulo'>{props.title}</h2>
    <div className='card-group'>
        <ListaPublicaciones />
    </div>
    </>
  )
}

export default Category;