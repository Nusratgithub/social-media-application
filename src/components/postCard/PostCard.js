import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import "./PostCard.css"

const PostCard = ({ post }) => {
  const { user } = useContext(AuthContext);
  const { _id, profile, desc, date, photo, } = post;
  const [count, setCount] = useState(0);
  const [love, setLove] = useState(0);

  const handleComment = (e) => {
    e.preventDefault()
    const from = e.target
    const comment = {
      reviewDetails: from.message.value,
    }

    fetch('https://social-media-server-lime.vercel.app/message', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.acknowledged) {
          alert('comment placed successfully')
        }
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="post p-3">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            className="postProfileImg"
            src={profile}
            alt=""
          />
          <span className="font-bold mx-2">{post.name}</span>
          <span className="text-xs">{date}</span>
        </div>
        <div className="">
          <img className="likeIcon" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/three-dots-5246523-4384607.png?f=avif&w=128" alt="" />
        </div>
      </div>
      <div className="my-4">
        <span className="font-semibold ">{desc}</span>
        <img className="postImg" src={photo} alt="" />
      </div>
      <div className="text-xl">
        <Link to={`/newsPost/${_id}`}>
          <button className='text-right'>see more....</button>
        </Link>
      </div>
    </div>

  );
};

export default PostCard;