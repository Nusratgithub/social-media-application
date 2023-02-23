import React, { useEffect, useState } from 'react';
import MessageItem from "../Message/MessageItem"


const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://social-media-server-lime.vercel.app/message', {

    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {

        }
        return res.json()
      })
      .then(data => {
        setComments(data)
      })
  }, [])

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if (proceed) {
      fetch(`https://social-media-server-lime.vercel.app/message/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert('deleted successfully');
            const remaining = comments.filter(comment => comment._id !== id);
            setComments(remaining);
          }
        })
    }
  }

  return (
    <div className='my-12 text-center'>
      <h1 className='text-2xl font-bold'>Customer Review</h1>
      <h2 className="text-xl">You have {comments.length} Comments</h2>
      <div className="overflow-x-auto w-full">
        <div className="table w-full">
          <div>
            {
              comments.map(comment => <MessageItem
                key={comment._id}
                comment={comment}
                handleDelete={handleDelete}
              />)
            }
          </div>
        </div>
      </div>
    </div>
  );

};

export default Comments;