import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Post from '../../components/Posts/Post';
import Feed from '../../components/OutlineFeed/Feed';
const Home = () => {
  return (
    <div className='flex'>
      <aside class="">
        <Sidebar/>
       </aside>
      <div className=''>
        <Post />
        <Feed/>
        
      </div>
      
    </div>
  )
    
};

export default Home;