import { createBrowserRouter } from 'react-router-dom';
import Feed from '../components/OutlineFeed/Feed';
import PostCard from '../components/postCard/PostCard';
import PostDetails from '../components/postCard/PostDetails';
import Main from '../layout/Main';
import ContactUs from '../pages/Contact/ContactUs';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/login/Login';
import Message from '../pages/Message/Message';
import Register from '../pages/signUp/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/newsPost',
        element: <Feed />
      },
      {
        path: '/newsPost/:id',
        element: <PostDetails />,
        loader: ({ params }) => fetch(`https://social-media-server-lime.vercel.app/newsPost/${params?.id}`)
      },
      {
        path: '/message',
        element: <Message />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/contact',
        element: <ContactUs />
      }
    ]


  }
])
export default router;