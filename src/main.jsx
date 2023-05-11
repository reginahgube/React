import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import './index.css'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Collection from './Components/Collection'
import Sale from './Pages/Sale'
import Jewellery from './Pages/Jewellery'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {  
    path: "/",
    element: <Home/>,
  }
  ,
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/collection",
    element: <Collection/>,
  }
  ,
  {
    path: "/sale",
    element: <Sale/>,
  }
  ,
  {
    path: "/jewellery",
    element: <Jewellery/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
