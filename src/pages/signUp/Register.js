import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/'


  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true })
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="hero w-full my-12">
      <div className="hero-content grid gap-8 lg:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className='' src='https://www.go.ooo/img/bg-img/Login.jpg' alt="" />
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Sign Up</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" name='password' placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <input className="border p-2 rounded-md font-semibold border-slate-700 hover:bg-slate-700 hover:text-white" type="submit" value="Sign Up" />
            </div>
          </form>
          <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;