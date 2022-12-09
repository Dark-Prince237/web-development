import React from "react";
import LoginImg from "../images/a.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={LoginImg} alt="" />
      </div>

      <div className="bg-gray-800 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8  rounded-lg">
          <h2 className="text-4xl font-bold text-center text-white">SIGN IN</h2>
          <div className="flex flex-col text-gray-400 py-2">
            <label>User Name</label>

            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 border border-transparent  focus:border-blue-500 focus:bg-gray-800 focus:outline-none "
              type="text"
            />
          </div>

          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 border border-transparent focus:border-blue-500 focus:bg-gray-800 focus:outline-none "
              type="password"
            />
          </div>


          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center"><input className="mr-2" type="checkbox" />Remember Me</p>

            <p>Forget Password</p>
          </div>

          <Link to="/signin"><button className="w-full mx-1 m-5 py-2 bg-teal-500 hover:bg-teal-700 text-white font-semibold rounded">Sign In</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
