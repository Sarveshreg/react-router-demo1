import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from './Layout.jsx'
import Home from "./component/home/Home"
import About from './component/about/About.jsx'
import Contact from "./component/contact/Contact"
import User from './user/User.jsx'
import Github from './component/github/Github.jsx'
import {info} from "./component/github/Github"

// let router=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {path:"",
//     element:<Home/>},
//       {path:"about",
//     element:<About/>},
//     {path:"contact",
//     element:<Contact/>}
//     ]
//   }
// ])

let router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path="" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/user/:id" element={<User/>}/>
    <Route loader={info} path="/github" element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
