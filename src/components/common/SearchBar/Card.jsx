import React from 'react'
import '../../../css/common/SearchBar/Card.css'
import { Link } from '@mui/material'

const Card = (props) => {
    const {movie} = props
  return (

    <div className='col-11 col-md-6 col-lg-3 card m-3 p-0'>
    <img src={movie.Poster} className="card-img-top" alt={movie.Title}></img>
    <div className="card-body">
    <h2 className="card-title mb-1">Frenchie</h2> {/* movie.name */}
    <p className="card-text">Cachorro 3 meses, mestizo. Se lleva bien con otros animales</p> {/* movie.description */}
    <div className='d-flex justify-content-center'>
        <button className='favBtn '>Marcar como favorito</button>
    </div>
    <a to="/" className='asd'>+Ver más</a>

    </div>
    </div>
  )
}

export default Card