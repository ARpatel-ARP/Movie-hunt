import React, { useState } from "react";
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
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) toast.success(res.data.message);
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const togglerHandler = () => {
    dispatch(setToggle());
    if (toggle) dispatch(clearSearch());
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="flex justify-between items-center px-4 sm:px-6 py-3">
        <img className="w-28 sm:w-36 md:w-48 lg:w-56" src="./Rautflix.png" alt="netflix-logo" />

        {user && (
          <>
            {/* Desktop Nav */}
            <div className="hidden sm:flex gap-x-3 items-center">
              <IoMdArrowDropdownCircle size={20} className="cursor-pointer" color="white" />
              <h1 className="text-base text-white">{user.fullName}</h1>
              <button onClick={logoutHandler} className="bg-red-700 hover:bg-red-900 text-white font-bold px-4 py-1.5 rounded text-sm transition duration-300">
                Log out
              </button>
              <button onClick={togglerHandler} className="bg-red-700 hover:bg-red-900 text-white font-bold px-4 py-1.5 rounded text-sm transition duration-300">
                {toggle ? "Home" : "Search"}
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button className="sm:hidden text-white text-2xl font-bold" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </>
        )}
      </div>

      {/* Mobile Dropdown */}
      {user && menuOpen && (
        <div className="sm:hidden bg-black/95 px-4 pb-4 flex flex-col gap-y-3">
          <div className="flex items-center gap-x-2 text-white text-sm">
            <IoMdArrowDropdownCircle size={16} color="white" />
            <span>{user.fullName}</span>
          </div>
          <button onClick={togglerHandler} className="bg-red-700 hover:bg-red-900 text-white font-bold px-4 py-2 rounded text-sm transition duration-300 w-full">
            {toggle ? "Home" : "Search"}
          </button>
          <button onClick={() => { logoutHandler(); setMenuOpen(false); }} className="bg-red-700 hover:bg-red-900 text-white font-bold px-4 py-2 rounded text-sm transition duration-300 w-full">
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
