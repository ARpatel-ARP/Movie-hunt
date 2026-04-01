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
  const isLoading = useSelector(store=>store.app.isLoading)

  const loginHandler = async () => {
     setIsLogin(!isLogin);
  };
  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    if (isLogin) {
      // Login
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (res.data.success) {
          toast.success(res.data.message);
          dispatch(setUser(res.data.user));
          navigate("/browse");
        }
      } catch (error) {
        const message =
          error.response?.data?.message ||
          "Something went wrong. Check your connection.";
        toast.error(message);
        console.log(error);
      } finally{
        dispatch(setLoading(false))
      }
    } else {
      // Register
      dispatch(setLoading(true))
      const user = { fullName, email, password };

      try {
        const res = await axios.post(`${API_END_POINT}/register`, user);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }
      finally{
        dispatch(setLoading(false))
      }
    }
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh] opacity-70"
          src="https://i.pinimg.com/1200x/4c/54/2b/4c542b2cbf8949a1a4a85de22cf5f2e9.jpg"
          alt="banner"
        />
      </div>
      <form
        onSubmit={getInputData}
        action=""
        className="absolute opacity-95 rounded-2xl bg-black top-10 p-8 flex flex-col justify-center w-4/12 mx-auto my-36 left-0 right-0"
      >
        <h1 className="text-white left-0 right-0 mx-auto my-4 font-bold">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <div className="flex-col flex gap-y-3 text-white">
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="px-3 bg-slate-900 h-10"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 bg-slate-900 h-10"
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 bg-slate-900 h-10"
            type="password"
            placeholder="Enter Password"
          />
          {!isLogin && (
            <input
              className="px-3 bg-slate-900 h-10"
              type="text"
              placeholder="Confirm Password"
            />
          )}
          <p>
            {isLogin ? "New to Rautflix?" : "Already have an Account? "}{" "}
            <span
              onClick={loginHandler}
              className="ml-1 cursor-pointer text-red-500"
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
         <button className="bg-gradient-to-r from-red-700 to-red-900 hover:from-red-950 hover:to-slate-900 text-white font-bold px-6 py-2 rounded transition duration-300">
              {`${isLoading? "Please wait loading...":(isLogin?"Login":"Sign up")}`}
            </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
