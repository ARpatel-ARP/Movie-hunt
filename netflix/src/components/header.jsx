import React from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT } from "../utils/constants.jsx";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle } from "../redux/MovieSlice.jsx";
import { clearSearch } from "../redux/SearchSlice.jsx";

const Header = () => {
  const user = useSelector((store) => store.app.user)
  const toggle = useSelector(store=>store.movie.toggle)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutHnadler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`)
     if (res.data.success) {
      toast.success(res.data.message)
     }
      dispatch(setUser(null))
      navigate("/")
      
    } catch (error) {
      console.log(error);
      
    }}
    const togglerHandler = () => {
      dispatch(setToggle())
      if (toggle) {
        dispatch(clearSearch());
      }
    }
  return (
   <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-2 bg-gradient-to-b from-black/60 to-transparent">
      <img
        className="w-60 broder-2"
        src="./Rautflix.png"
        alt="netflix-logo"
      />{" "}
      {
        user && (<div className="gap-x-2 flex items-centre">
        <IoMdArrowDropdownCircle size={20} className="mt-2.5 cursor-pointer " color="white" />
        <h1 className="text-lg mt-1 text-white">{user.fullName}</h1>
        <div className="button gap-x-2 flex">
          <button onClick={logoutHnadler} className="bg-red-700 hover:bg-red-900 text-white font-bold px-6 py-2 rounded transition duration-300">
            Log out
          </button>
          <button onClick={togglerHandler} className="bg-red-700 hover:bg-red-900 text-white font-bold px-6 py-2 rounded transition duration-300">
            {toggle? "Home": "Search Here"}
          </button>
        </div>
      </div>)
      }
    </div>
  );
};

export default Header;
