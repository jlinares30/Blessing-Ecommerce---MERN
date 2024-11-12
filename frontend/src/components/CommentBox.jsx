// CommentBox.js
import React, { useState } from 'react';

const CommentBox = () => {
  const [comments, setComments] = useState([
    { id: 1, text: '¡Gran producto!', replies: [], showReplyBox: false, likes: 0 },
    { id: 2, text: 'Excelente servicio.', replies: [], showReplyBox: false, likes: 0 },
  ]);

  const [newComment, setNewComment] = useState('');
  const [newReply, setNewReply] = useState('');

  // Función para agregar un comentario
  const addComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: comments.length + 1,
        text: newComment,
        replies: [],
        showReplyBox: false,
        likes: 0,
      };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  // Función para agregar una respuesta a un comentario
  const addReply = (commentId) => {
    if (newReply.trim()) {
      const updatedComments = comments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...comment.replies, { text: newReply, likes: 0 }],
            showReplyBox: false, // Cierra la caja de respuesta después de agregar
          };
        }
        return comment;
      });
      setComments(updatedComments);
      setNewReply('');
    }
  };

  // Función para mostrar/ocultar la caja de respuesta
  const toggleReplyBox = (commentId) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, showReplyBox: !comment.showReplyBox };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  // Función para aumentar los likes de un comentario
  const likeComment = (commentId) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, likes: comment.likes + 1 };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  // Función para aumentar los likes de una respuesta
  const likeReply = (commentId, replyIndex) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        const updatedReplies = [...comment.replies];
        updatedReplies[replyIndex] = {
          ...updatedReplies[replyIndex],
          likes: updatedReplies[replyIndex].likes + 1,
        };
        return { ...comment, replies: updatedReplies };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  return (
    <div className="container mt-4">
      <h3>Reseñas</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Escribe tu comentario..."
        />
        <button className="btn btn-primary mt-2" onClick={addComment}>Publicar comentario</button>
      </div>

      {comments.map((comment) => (
        <div key={comment.id} className="card mb-3">
          <div className="card-body">
            <p>{comment.text}</p>
            <button className="btn btn-outline-info btn-sm me-2" onClick={() => toggleReplyBox(comment.id)}>
              Responder
            </button>
            <button className="btn btn-outline-primary btn-sm" onClick={() => likeComment(comment.id)}>
              Me gusta ({comment.likes})
            </button>

            {comment.showReplyBox && (
              <div className="mt-3">
                <textarea
                  className="form-control mb-2"
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                  placeholder="Escribe tu respuesta..."
                />
                <button className="btn btn-success btn-sm" onClick={() => addReply(comment.id)}>
                  Publicar respuesta
                </button>
              </div>
            )}

            {comment.replies.length > 0 && (
              <div className="mt-3">
                {comment.replies.map((reply, index) => (
                  <div key={index} className="card mb-2">
                    <div className="card-body">
                      <p>{reply.text}</p>
                      <button className="btn btn-outline-primary btn-sm" onClick={() => likeReply(comment.id, index)}>
                        Me gusta ({reply.likes})
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentBox;
