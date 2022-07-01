import React from 'react'
import Card from './Card'

const CardList = ({ results }) => {

    let data = [];
    if(results.data) {  /* Dentro de results tenemos data y dentro search, en donde recien ahi se encuentran las peliculas solicitadas */
        data = results.data.Search || [];
    }


  return (
    <section className='container'>

    <div className='row justify-content-center'> 
        
            {data.map((item) => (
                <Card key={item.imdbID} movie={item}/> /* imdbID es la id que tenemos en el objeto */
            ))}
        
    </div>
    </section>

  )
}

export default CardList