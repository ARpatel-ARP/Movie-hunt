import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Browse from './Browse'
import Login from './login'

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    }


])
const Body = () => {
  return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
