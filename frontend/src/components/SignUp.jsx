import React from 'react';

const SignUp = () => {
  return (
    <div className="bg-gradient-to-br from-green-100 to-brown-700 min-h-screen flex items-center justify-center">
      <div className="bg-green-300 rounded-lg shadow-lg p-6 w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="md:flex">
          <div className="md:w-1/2 p-6">
            <h1 className="text-6xl font-bold text-green mb-4">Reminder</h1>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crabitur et est sed felis aliquet sollicitudin.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <h5 className="text-4xl text-center font-bold">Sign Up</h5>
            <br />
            
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 rounded-xl"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 rounded-xl"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 rounded-xl"
                placeholder="Mobile Number"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 rounded-xl"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center space-x-2">
                
              <p className='text-right'> {/* Align the link to the right */}
              Have an account? 
              
            </p>
              </label>
              <a
                href="#"
                className="underline decoration-sky-500 text-cyan-700"
              >
                Login to Your Account
              </a>
            </div>
            
            <br />
            <div className="text-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-5/6">
                Sign Up
              </button>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
