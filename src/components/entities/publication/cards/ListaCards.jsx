
import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';
import Spinner from '../../../common/spinner/Spinner';
import clientAxios from '../../../../config/axios';




const ListaCards = () => {
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(false);

    const getPublications = async () =>{
      try{
      setLoading(true)
      const response = await clientAxios.get('http://localhost:4000/api/v1/publication/');
      setPublications(response.data.publications);
      setLoading(false)
      } catch (error){
          throw error
      }
  };

    useEffect(()=>{
        getPublications();
    }, []);

  if(loading){
      return <Spinner />
  }
  return (
    <section className='container-fluid'>
        <div className='row'>
                 {publications.map((post, index) => <Card key={index} title= {post.petName} description={post.petDescription} postId={post.id} image={post.image} isHighlighted={post.isHighlighted}/>)}    
        </div>
    </section>
  )
}
export default ListaCards;