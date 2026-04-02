import React, { useState } from "react";
import Header from "./header.jsx";
import axios from "axios";
import { API_END_POINT } from "../utils/constants.jsx";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice.jsx";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = () => setIsLogin(!isLogin);

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      try {
        const res = await axios.post(`${API_END_POINT}/login`, { email, password }, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(setUser(res.data.user));
          navigate("/browse");
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong.");
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      try {
        const res = await axios.post(`${API_END_POINT}/register`, { fullName, email, password });
        if (res.data.success) toast.success(res.data.message);
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoading(false));
      }
    }
    setFullName(""); setEmail(""); setPassword("");
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      {/* Background */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src="https://i.pinimg.com/1200x/4c/54/2b/4c542b2cbf8949a1a4a85de22cf5f2e9.jpg"
        alt="banner"
      />
      {/* Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <form
          onSubmit={getInputData}
          className="bg-black/95 rounded-2xl p-6 sm:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md flex flex-col gap-y-4"
        >
          <h1 className="text-white text-2xl sm:text-3xl font-bold">{isLogin ? "Login" : "Sign Up"}</h1>
          <div className="flex flex-col gap-y-3 text-white">
            {!isLogin && (
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="px-3 bg-slate-900 h-11 rounded text-sm w-full"
                type="text"
                placeholder="Full Name"
              />
            )}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 bg-slate-900 h-11 rounded text-sm w-full"
              type="email"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 bg-slate-900 h-11 rounded text-sm w-full"
              type="password"
              placeholder="Password"
            />
            {!isLogin && (
              <input
                className="px-3 bg-slate-900 h-11 rounded text-sm w-full"
                type="text"
                placeholder="Confirm Password"
              />
            )}
            <p className="text-sm text-gray-300">
              {isLogin ? "New to Rautflix?" : "Already have an account?"}
              <span onClick={loginHandler} className="ml-1 cursor-pointer text-red-500 font-medium">
                {isLogin ? " Sign Up" : " Login"}
              </span>
            </p>
            <button className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-950 hover:to-slate-900 text-white font-bold px-6 py-2.5 rounded transition duration-300 w-full">
              {isLoading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
