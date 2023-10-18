import React from "react";

const Login = () => {
  return (
    <div className="bg-gradient-to-br from-green-100 to-brown-700 min-h-screen flex items-center justify-center">
      <div className="bg-green-300 rounded-lg shadow-lg p-6 w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="md:flex">
          <div className="md:w-1/2 p-6">
            <h1 className="text-6xl font-bold text-green mb-4">Reminder</h1>
            <br />
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crabitur
              et est sed felis aliquet sollicitudin.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <h5 className="text-4xl font-bold">Login</h5>
            <br />
            <p>
              Don't have an account? <br />
              <a
                href="#"
                className="underline decoration-sky-500 text-cyan-700"
              >
                Create Your Account
              </a>{" "}
              it takes less than a minute
            </p>
            <br />
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 rounded-xl"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                className="w-full p-2 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 rounded-xl"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked className="form-checkbox" />
                <span className="text-brown">Remember me</span>
              </label>
              <p className="text-brown">Forget password?</p>
            </div>
            <div className="text-center">
              <button className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded w-5/6">
                Login
              </button>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

