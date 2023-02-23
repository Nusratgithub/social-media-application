import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AddPost = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  const handlePostAdd = e => {
    e.preventDefault()
    const post = {
      name: e.target.postName.value,
      desc: e.target.postDesc.value,
      profile: e.target.postProfile.value,
      photo: e.target.postImage.value,
      date: new Date()
    }

    fetch('https://social-media-server-lime.vercel.app/newsPost', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert(data.message)
          navigate('/')
        } else {
          toast.error(data.error)
        }
      })
      .catch(err => {
        toast.error(err.message)
      })
  }
  return (
    <div>
      {
        user?.uid ?
          <div className='px-[15px] md:px-0 mx-auto py-3' data-aos='fade-up' data-aos-duration='1000'>
            <form onSubmit={handlePostAdd} className='mx-auto p-5 bg-white shadow-2xl rounded-xl'>
              <h1 className='text-2xl mb-2 font-bold text-center'>Create A New Post</h1>
              <div className='mb-5'>
                <label htmlFor="postName" className="block text-sm font-bold text-theme-dark">
                  post Name
                </label>
                <input
                  type="text"
                  name="postName"
                  defaultValue={user?.displayName}
                  className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                  placeholder='Enter your post name'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor="postDesc" className="block text-sm font-bold text-theme-dark">
                  post desc
                </label>
                <input
                  type="text"
                  name="postDesc"
                  className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                  placeholder='Enter your post name'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor="postProfile" className="block text-sm font-bold text-theme-dark">
                  post profile
                </label>
                <input
                  type="text"
                  name="postProfile"
                  defaultValue={user?.photoURL}
                  className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                  placeholder='Enter your image url'
                />
              </div>
              <div className='mb-5'>
                <label htmlFor="postImage" className="block text-sm font-bold text-theme-dark">
                  post Image
                </label>
                <input
                  type="text"
                  name="postImage"
                  className="mt-2 block w-full rounded-md border py-3 px-5 focus:outline-none"
                  placeholder='Enter your image url'
                />
              </div>
              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-slate-700 py-2 px-4 text-sm font-bold text-white shadow-sm  focus:outline-none"
                >
                  Add post
                </button>
              </div>
            </form>
          </div>
          :
          <Link to='/login'>
            <div className='text-center my-10'>
              <h3 className='text-3xl text-black font-semibold'>Please login to add a review</h3>
            </div>
          </Link>
      }
    </div>
  );
};

export default AddPost;