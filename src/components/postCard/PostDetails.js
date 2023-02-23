import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import "./PostCard.css"

const PostCard = () => {
  const post = useLoaderData();
  const { _id, profile, desc, date, photo, } = post;
  console.log(post);
  const [count, setCount] = useState(5);
  const [love, setLove] = useState(10);

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
      <div className="flex justify-between items-center  mb-2">
        <div className="flex gap-2 items-center">
          <img className="likeIcon" onClick={() => setCount((prvState) => prvState + 1)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkW2bslH5jkEbDsaPQiHhP8T5I8vtjGdYPtg&usqp=CAU" alt="" />
          <img className="likeIcon" onClick={() => setLove((prvState) => prvState + 1)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwv9sD4JRZX_wOYHwnKjnhtuKEu0o9PICRhVDdjb9nFAQVzjjvgSA8eRJq0K4kBnmOXA&usqp=CAU" alt="" />
          <span className="postLikeCounter">{count} people like it</span>
          <span className="postLikeCounter">{love} people love it</span>
        </div>
      </div>
      <div className="">
        <form onSubmit={handleComment} className='mx-auto bg-white ' data-aos='fade-up' data-aos-duration='1000'>
          <div className='my-4'>
            <textarea
              name="message"
              rows={3}
              className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
              required
              placeholder="write a comment"
            />
          </div>
          <div className="py-1 text-right ">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border p-2 border-slate-700 hover:bg-slate-700 hover:text-white font-bold shadow-sm focus:outline-none"
            >
              Add Comment
            </button>
          </div>
        </form>
      </div>
    </div>

  );

};

export default PostCard;