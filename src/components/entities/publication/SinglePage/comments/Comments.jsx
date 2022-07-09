import React, { useEffect } from 'react'
import { useState } from 'react';
import {
    getComments as getCommentsApi, 
    createComment as createCommentApi,
    deleteComment as deleteCommentApi,
    updateComment as updateCommentApi
} from './api';
import Comment from './Comment';
import CommentForm from './CommentForm';

const Comments = ({currentUserId}) => { /* currentUserId proviene desde el padre */
    const [backendComments, setBackendComments] = useState([]) /* Colocamos un array vacio porque no tenemos ninguna data y esta data tendria que venir desde el backend */
    const [activeComment, setActiveComment] = useState(null) /* Escuchara a dos objetos diferentes cuando tengamos un activeComment:
        {type: 'editing', id: '1'}
        {type: 'replying', id: '1'}
        La id nos indica en que comentario estaremos editando o respondiendo. Por eso es que agregaremos activeComment y setActiveComment en el componente Comment y tambien el el reply
    */
    
    /* Mucho de los comentarios son replys por eso creo rootComments para traer a los comentarios padres*/
    const rootComments = backendComments.filter(backendComments => backendComments.parentId === null); /* Con esto traigo a los comentarios que no son replys, sino que son los comentarios padres */
    const getReplies = commendId =>  { /* commendId es el identificador unico del comment padre. Asi es como podemos traer los replies comments del commentario, desde el backend */
        return backendComments.filter(backendComment => backendComment.parentId === commendId) /* Con esto traemos a los replies */
            .sort(  /* Todo esto lo hacemos para colocar las respuestas de modo que la mas nueva quede abajo */
                (a,b) =>
                    new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    };

    const addComment = (text, parentId) => { /* colocamos el parentId porque luego cuando hagamos un reply esto quiere decir que estamos creando un comentario que es hijo de otro comentario, entonces por eso es que nuestro comment Form nos debe proporcionar el parentId para que en base a esto podamos hacer el comment reply (children) */
        createCommentApi(text, parentId).then(comment => {
            setBackendComments([comment, ...backendComments])
            setActiveComment(null)
        })
    } 

    const deleteComment = (commentId) => {
        deleteCommentApi(commentId).then(()=> {
            const updatedBackendComments = backendComments.filter(
                backendComments => backendComments.id !== commentId
            );
            setBackendComments(updatedBackendComments);
        });
    }

    const updateComment = (text, commentId) => {
        updateCommentApi(text, commentId).then(() => {
            const updatedBackendComments = backendComments.map(backendComment => {
                if (backendComment.id === commentId) {
                    return {...backendComment, body: text}
                }
                return backendComment
            })
            setBackendComments(updatedBackendComments)
            setActiveComment(null)
        })
    }

    useEffect(() => {
        getCommentsApi().then(data => {  /* Con esto traigo los comentarios desde api.jsx y los seteo en backendComments */
            setBackendComments(data)
        })
    }, [])

  return (
    <div className='comments'>
        <h3 className='comments-title'>Comentarios</h3>
        <div className='comments-form-container'>
        <div className="comment-form-title">Dejanos tu comentario</div>
        <CommentForm submitLabel='Enviar' handleSubmit={addComment} />
        </div>
        <div className="comments-container">
            {rootComments.map(rootComment => (  /* Con esto hago un .map para traer a los comentarios padres que indique en rootComments */
                <Comment 
                    key={rootComment.id} 
                    comment={rootComment} 
                    replies={getReplies(rootComment.id)} /* Con esto recolecto todos los comment replies cuando se renderiza el comment */
                    currentUserId={currentUserId} /* Para que cada uno de los comentarios tenga un currentUserId */
                    deleteComment={deleteComment}
                    updateComment={updateComment}
                    activeComment={activeComment}
                    setActiveComment={setActiveComment}
                    addComment={addComment}
                /> /* Con esto inserto Comment e indico a comment un rootComment porque tengo que acceder a todo el rootComment por completo. Al colocar comment={rootComment}, le estoy pasando la info de rootComment al elemento hijo Comment */
            ))}
        </div>
    </div>
  )
}

export default Comments;