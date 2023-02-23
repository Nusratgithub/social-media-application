import React, { useContext, useState } from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.warning('User Logout Successfully!', { autoClose: 400 })
      })
      .catch(error => {
        toast.error(error.message, { autoClose: 400 })
      })
  }
  const menuItems =
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/newsPost'>Media</Link></li>
      <li><Link to='/message'>Message</Link></li>
      <li><Link to='/contact'>Contact Us</Link></li>
    </>

  return (
    <div className="z-10 navbar bg-base-300 py-6 h-25 sticky top-[0px]">
      <div className="navbar-start">
        <Link to='/' className="flex">
          <h1 className='text-2xl font-bold italic font-serif my-auto'>Social Media</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <fieldset className="w-full space-y-1">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 ">
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input type="search" name="Search" placeholder="Search..."
              className="border w-96  border-gray-200 py-3 pl-10 pr-5 focus:outline-none text-theme-text" autoComplete="off" />
          </div>
        </fieldset>
        <div className='flex ml-4'>
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
      </div>
      </div>
   
      <div className='navbar-end'>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-black" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="container mx-auto absolute right-0 top-0 left-0  bg-white z-10">
              <div className="p-5 bg-white rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
                      className="inline-flex items-center text-2xl font-bold"
                    >
                      Social Media
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded text-themeWhite hover:text-themeOrange-10 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-theme-dark" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                   
                    {menuItems}
                    
                    {
                      user?.uid ?
                        <>
                          <button className='btn btn-ghost px-4' onClick={handleLogOut}>Logout</button>
                        </>
                        :
                        <>
                          <button className='btn btn-outline px-6'> <Link className='' to='/login'>Login</Link>
                          </button>
                        </>
                    }
                    
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
        <div className='hidden lg:flex'>
          {
            user?.uid ?
              <>
                <button className='btn btn-ghost mx-2' onClick={handleLogOut}>Logout</button>
              </>
              :
              <>
                <button className='btn btn-ghost mx-2'> <Link className='' to='/login'>Login</Link>
                </button>

              </>
          }
      </div>
      </div>

    </div>
  );
};

export default Header;