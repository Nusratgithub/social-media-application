import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'

  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name);

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        navigate(from, { replace: true })
      })
      .then(error => console.log(error))
      .catch(err => {
        console.log(err)
        setError(err.message)
      })

  }
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
        navigate(from, { replace: true })
      })
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <div className="hero w-full my-12">
      <div className="hero-content grid gap-8 lg:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className='' src='https://www.go.ooo/img/bg-img/Login.jpg' alt="" />
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" name='password' placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <p className='text-orange-600'>{error}</p>
            <div className="form-control mt-6">
              <input className="border p-2 rounded-md font-semibold hover:bg-slate-700 hover:text-white border-slate-700" type="submit" value="Login" />
            </div>
          </form>
          <div className='flex justify-center gap-4 my-3'>
            <button onClick={handleGoogleSignIn} className=' hover:bg-slate-700 hover:text-white border p-2 rounded-md font-semibold  border-slate-700'>
              <FaGoogle className='mr-2 inline'></FaGoogle>Google</button>
            <button className=' hover:bg-slate-700 hover:text-white border p-2 rounded-md font-semibold border-slate-700'>
              <FaGithub className='mr-2 inline'></FaGithub>Github</button>
          </div>
          <p className='text-center'>New to this website? Please
            <Link className='text-orange-600 font-bold' to="/register"> Sign Up</Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Login;