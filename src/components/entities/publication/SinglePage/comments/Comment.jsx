import React from 'react'

import CommentForm from './CommentForm';

const Comment = ({
    comment, 
    replies, 
    currentUserId, 
    deleteComment,
    updateComment,
    activeComment,
    addComment, 
    setActiveComment, 
    parentId= null
}) => {
    const canReply = Boolean(currentUserId); /* Para responder necesitamos que estemos conectados, es por eso que usamos el currentUserId, ya que si estas conectado tenes un currentUserId (si no estas conectado, entonces tu currentUserId es null). Al indicarle que sea boolean basado en currentUserId, entonces, si Id no es null, seria TRUE*/
    const canEdit = currentUserId === comment.userId;  /* Por eso es que colocamos userId dentro de comment para comparar ambos y si son iguales entonces que pueda editar el comment */
    const canDelete = currentUserId === comment.userId;
    const createdAt = new Date(comment.createdAt).toLocaleDateString(); /* Para mostrar mejor la fecha que esta en la API, pero igual esto se puede acomodar mejor desde la API */
    const isReplying = 
    activeComment && 
    activeComment.type === 'replying' && 
    activeComment.id === comment.id

    const isEditing = 
    activeComment && 
    activeComment.type === 'editing' && 
    activeComment.id === comment.id

    const replyId = parentId ? parentId : comment.id/* Si tenemos parentId entonces replyId = parentId y sino (por ser null), replyId = comment.id. Pero aun no tenemos parentId, por lo que lo agregamos en los props como null (ya que los comments padres no tienen parentId pero si lo tienen los reply de esos comments)*/

  return (
    <div className='comment'>
        <div className="comment-image-container">
            <img src="/user-icon.png"/>
        </div>
        <div className="comment-right-part">
            <div className="comment-content">
                <div className="comment-author">{comment.username}</div>
                <div className='comment-date'>{createdAt}</div>
            </div>
            {!isEditing && <div className="comment-text">{comment.body}</div>} {/* Si no estamos dentro de 'ediing' state, que se renderice esta logica */}
            {isEditing && ( /* Pero si estamos dentro de 'editing', entonces que se muestre el siguiente form */
                <CommentForm 
                    submitLabel="Aceptar" 
                    hasCancelButton 
                    initialText={comment.body} 
                    handleSubmit={(text) => updateComment(text, comment.id)} /* Le pasamos el id para que el backend sepa cual comentario estamos manejando */
                    handleCancel={() => setActiveComment(null)} />
            )}
            <div className="comment-actions">
                {canReply && (
                    <div 
                        className="comment-action" 
                        onClick={() => 
                            setActiveComment({id:comment.id, type:'replying'})
                            }
                    >
                        Responder {/* Entonces, ahora cuando le damos al boton de Reply seteamos nuestro estado de ActiveComment a ese objeto de id y type replying. Entonces, en este caso estariamos habilitando nuestro replying señalando cual es la id con la que trabajamos. Lo siguiente a realizar es activar el form para el reply (el cual solo estara cuando tengamos el ActiveComment y el type sea replying. Esto es lo que trabajamos en la linea de codigo que le sigue a canDelete*/}
                        {/*  */}
                    </div>
                )}
                {canEdit && (
                    <div 
                        className="comment-action" 
                        onClick={() => 
                            setActiveComment({id:comment.id, type:'editing'})
                            }
                    >
                        Editar {/* Entonces, ahora cuando le damos al boton de Reply seteamos nuestro estado de ActiveComment a ese objeto de id y type editing. Entonces, en este caso estariamos habilitando nuestro editing señalando cual es la id con la que trabajamos */}
                    </div>
                )}
                {canDelete && (
                    <div 
                        className="comment-action" 
                        onClick={() => deleteComment(comment.id)}
                    >
                        Eliminar
                    </div>
                    )}
            </div>
            {isReplying && (
                <CommentForm 
                    submitLabel='Enviar' 
                    handleSubmit={(text) => addComment(text, replyId)} /> /* En handleSubmit llamamos a nuestro addComment donde le proveemos no solamente text, sino tambien el replyId. Entonces, para crear un reply a un comment, necesitamos darle un replyId. Y si estamos respondiendo algun comentario, entonces toma de ahi el parentId, pero si parentId es null, entonces lo toma de comment.id*/
            )} {/* Este codigo solo funcionara cuando existe cuando se la isReplying, la cual indica de que existe activeComment y que al mismo tiempo es de type:'repying' */}
            {replies.length > 0 && (  /* Sabemos que el reply es un array y para que no nos envie un reply vacio colocamos .length 0 */
                <div className="replies">
                    {replies.map(reply => (
                        <Comment 
                            comment={reply} 
                            key={reply.id} 
                            replies={[]} 
                            currentUserId={currentUserId} 
                            deleteComment={deleteComment}
                            updateComment={updateComment}
                            addComment={addComment} /* Aqui tenemos nuestro addComment dentro de nuestro componente Comment */
                            activeComment={activeComment}
                            setActiveComment={setActiveComment}
                            parentId={comment.id}/* Para darle un id a parentId */
                            /> /* Agregamos currentUserId por el mismo mitovio que en comentarios, para que tambien cada reply tenga su currentUserId. En cada reply proveemos la misma info que para el comentario. Lo mismo hacemos con deleteComment para pasarle la misma info que al comentario */
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default Comment;