import React, { useContext } from "react";
import { AiOutlineGooglePlus } from "react-icons/ai";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { LogIn, signInGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    LogIn(email, password)
      .then((result) => {
        const user = result.user;

        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const handleGoogleLogin = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  useTitle("Login");

  return (
    <div className="w-11/12 m-auto min-w-screen min-h-screen bg-base-200 flex justify-center items-center">
      <div className="w-[550px] text-[#0c0c0c] p-2">
        <div className="bg-base-200 p-4 rounded-md">
          <h2 className="text-xl mb-3">Welcome to Kids Store</h2>
          <p className="text-sm mb-3">Please signin to your account</p>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#0c0c0c] focus:border-indigo-500 overflow-hidden"
                type="text"
                name="email"
                placeholder="email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-5">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-[#0c0c0c] focus:border-indigo-500 overflow-hidden"
                type="password"
                name="password"
                placeholder="password"
                id="password"
                required
              />
              <p className="text-red-600">
                <small></small>
              </p>
            </div>
            <button className="bg-[rgb(228,207,140)] w-full hover:shadow-blue-500/50 hover:shadow-lg text-[#0c0c0c] rounded-md px-7 py-2 mb-3">
              Sign in
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Are you new user ? <Link to="/register">Register here</Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div
                onClick={handleGoogleLogin}
                className="w-[35px] text-[#d0d2d6] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden"
              >
                <span>
                  <AiOutlineGooglePlus />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
