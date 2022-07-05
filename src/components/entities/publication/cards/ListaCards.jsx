
import React from 'react';
import Card from './Card';


const ListaCards = (props) => {
  
  return (
    <section className='container-fluid'>
        <div className='row'>
                 {props.posts.map((post, i) => <Card title= {post.petName} description={post.petDescription} postId={post.id} image={post.image} isHighlighted={post.isHighlighted}/>)}    
        </div>
    </section>
  )
}
export default ListaCards;