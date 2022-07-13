
import React, { useContext } from 'react';
import Card from './Card';


const ListaCards = ({title, posts, isHighlighted}) => {

  posts = posts ?? [];
  return (
    <>
    <h2 className='titulo'>{title}</h2>
  {posts.length > 0 ? <div className='card-group'>
   <section className='container-fluid'>
        <div className='row'>
                 {posts.map((post) => <Card key={post.id} title= {post.title} description={post.description} postId={post.id} image={post.image} isHighlighted={isHighlighted}/>)}    
        </div>
    </section>
  </div> 
  : <div className='subtitulo'>Todavia no hay publicaciones en esta categoría</div>}
  </>)
  
}
export default ListaCards;