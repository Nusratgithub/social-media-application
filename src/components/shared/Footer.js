import React from 'react';

const footer = () => {
  return (
   
    <footer className="footer mt-7 px-4 pb-5 md:p-5 lg:p-8 bg-base-200 text-base-content">
      <div>
        <span className="footer-title hidden md:block">Services</span>
        <a href='/' className="hidden md:block link link-hover">Branding</a>
        <a href='/' className="hidden md:block link link-hover">Design</a>
        <a href='/' className="hidden md:block link link-hover">Marketing</a>
        <a href='/' className="hidden md:block link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a href='/' className="link link-hover">About us</a>
        <a href='/' className="link link-hover">Contact</a>
        <a href='/' className="link link-hover">Jobs</a>
        <a href='/' className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a href='/' className="link link-hover">Terms of use</a>
        <a href='/' className="link link-hover">Privacy policy</a>
        <a href='/' className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="relative">
            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
            <button className="btn absolute top-0 right-0 rounded-l-none">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;