import { Now_Playing_Movie, options } from "../utils/constants";
import { getNowPlayingMovies } from "../redux/MovieSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

const  usenowPlayingMovies = async () => {
      const dispatch = useDispatch();
    try {
      const res = await axios.get(Now_Playing_Movie, options)
      dispatch(getNowPlayingMovies(res.data.results))
      
    } catch (error) {
      console.log(error);
      
      
    }
    
  }

  export default usenowPlayingMovies