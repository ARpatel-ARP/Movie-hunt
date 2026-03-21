import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice";  // ✅ fix typo: useReducer → userReducer
import movieReducer from "./MovieSlice"
import searchSlice from "./SearchSlice"

const store = configureStore({
    reducer: {
        app: userReducer,  //✅ add it here
        movie:movieReducer,
        SearchMovie: searchSlice
    }
});

export default store;