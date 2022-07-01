import React from 'react'
import Card from './Card'
import '../../../css/common/SearchBar/CardList.css'

const CardList = ({ results }) => {

    let data = [];
    if(results.data) {  /* Dentro de results tenemos data y dentro search, en donde recien ahi se encuentran las peliculas solicitadas */
        data = results.data.Search || [];
    }


  return (
    <section className='container'>

    <div className='row justify-content-center'> 
        
    {
      data.length!=0 ? 
      data.map((item) => (
        <Card key={item.imdbID} movie={item}/>
      )) 
      :
        <h2 className='text-center no-results'>Not Results found</h2>
    }
        
    </div>
    </section>

  )
}

export default CardList