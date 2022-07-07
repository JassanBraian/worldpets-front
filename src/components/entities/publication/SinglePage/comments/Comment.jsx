import React from 'react'

import CommentForm from './CommentForm';

const Comment = ({
    comment,
    // currentUserId, 
    // deleteComment,
    // updateComment,
    // activeComment, 
    // setActiveComment, 
    // parentId= null
}) => {
    // const canEdit = currentUserId === comment.userId;  /* Por eso es que colocamos userId dentro de comment para comparar ambos y si son iguales entonces que pueda editar el comment */
    // const canDelete = currentUserId === comment.userId;
    const createdAt = new Date(comment.createdAt).toLocaleDateString(); /* Para mostrar mejor la fecha que esta en la API, pero igual esto se puede acomodar mejor desde la API */

    // const isEditing = 
    // activeComment && 
    // activeComment.type === 'editing' && 
    // activeComment.id === comment._id

    return (
        <div className='comment'>
            <div className="comment-image-container">
                <img src="/user-icon.png" />
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    {/* <div className="comment-author">{comment.username}</div> */}
                    <div className="comment-author">{comment.userId}</div>
                    <div className='comment-date'>{createdAt}</div>
                </div>
                {/* {!isEditing && <div className="comment-text">{comment.description}</div>} Si no estamos dentro de 'ediing' state, que se renderice esta logica */}
                <div className="comment-text">{comment.description}</div>
                {/* {isEditing && (  Pero si estamos dentro de 'editing', entonces que se muestre el siguiente form 
                    <CommentForm
                        submitLabel="Aceptar"
                        hasCancelButton
                        initialText={comment.description}
                        handleSubmit={(text) => updateComment(text, comment._id)}  Le pasamos el id para que el backend sepa cual comentario estamos manejando 
                        handleCancel={() => setActiveComment(null)}
                    />
                )} */}
                <CommentForm
                        submitLabel="Aceptar"
                        hasCancelButton
                        initialText={comment.description}
                        // handleSubmit={(text) => updateComment(text, comment._id)} 
                        /* Le pasamos el id para que el backend sepa cual comentario estamos manejando */
                        // handleCancel={() => setActiveComment(null)}
                    />
                {/* <div className="comment-actions">
                    {canEdit && (
                        <div
                            className="comment-action"
                            onClick={() =>
                                setActiveComment({ id: comment._id, type: 'editing' })
                            }
                        >
                            Editar {
                             Entonces, ahora cuando le damos al boton de Editar, seteamos nuestro estado de ActiveComment a ese objeto de id y type editing. Entonces, en este caso estariamos habilitando nuestro editing señalando cual es la id con la que trabajamos }
                        </div>
                    )}
                    {canDelete && (
                        <div
                            className="comment-action"
                            onClick={() => deleteComment(comment._id)}
                        >
                            Eliminar
                        </div>
                    )}
                </div> */}

            </div>
        </div>
    )
}

export default Comment;