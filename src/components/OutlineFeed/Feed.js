import React, { useEffect, useState } from 'react';
import PostCard from '../postCard/PostCard';
import Post from '../Posts/Post';

const Feed = () => {
  const [allPost, setPost] = useState([]);

  useEffect(() => {
    fetch('https://social-media-server-lime.vercel.app/newsPost')
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])
  return (
    <div className=''>
      {
        allPost?.map(post => <PostCard
          key={post._id}
          post={post}
        >
        </PostCard>)
      }
    </div>
  );
};

export default Feed;