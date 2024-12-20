import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({ type,onSubmit }) => {
  const [data, setData] = useState({
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (e.g., send to API)
    
    onSubmit(data)
  };

  return (
    <div className="bg-white w-screen font-sans text-gray-900">
      <div className="">
        <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-2 py-12 text-center md:mx-auto md:w-2/3 md:py-20">
            <h1 className="mb-4 text-3xl font-black leading-4 sm:text-5xl xl:text-6xl">
              {type === 'Login' ? 'Login here to continue...' : 'Register here to continue...'}
            </h1>
            <div className="text-lg sm:text-xl">
              {/* Optional description */}
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
        <form
          className="shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold" htmlFor="email">
              E-mail
            </label>
            <input
              className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={handleChange}
            />
            <span className="my-2 block"></span>
          </div>

          {type === 'Register' && (
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold" htmlFor="username">
                Username
              </label>
              <input
                className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                required
                onChange={handleChange}
              />
              <span className="my-2 block"></span>
            </div>
          )}

          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold" htmlFor="password">
              Password
            </label>
            <input
              className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
              id="password"
              type="password"
              placeholder="******************"
              required
              name="password"
              onChange={handleChange}
            />
          </div>

          {type === 'Register' && (
            <div className="mb-6">
              <label className="mb-2 flex text-sm">
                <input type="checkbox" name="accept" className="mr-2" required />
                <div className="text-gray-800">
                  <p>
                    I accept the
                    <a href="#" className="cursor-pointer text-blue-500 underline">
                      terms of use
                    </a>
                    and
                    <a href="#" className="cursor-pointer text-blue-500 underline">
                      privacy policy
                    </a>
                  </p>
                </div>
              </label>
            </div>
          )}

          {
            type === 'Register' ? (
              <Link to ='/login' style={{color:'blue'}}>Go to login</Link>
            ):(
              <Link to ='/register' style={{color:'blue'}}>Go to Register</Link>
            )
          } 


          <div className="flex items-center">
            <div className="flex-1"></div>
            <button
              className="cursor-pointer rounded bg-blue-600 py-2 px-8 text-center text-lg font-bold text-white"
              type="submit"
            >
              {type === 'Login' ? 'Login' : 'Create account'}
            </button>
            
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default Form;
