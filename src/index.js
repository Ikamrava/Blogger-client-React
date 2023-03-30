import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AuthContectProvider } from './contect/authContext';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Single from './pages/Single';
import Write from './pages/Write';
import Login from './pages/Login';
import Register from './pages/Register';

const Layout = ()=>{
  return(
    <div className=" mx-auto max-w-6xl px-5">
      <Header/>
      <Outlet/>
    </div>
  )
}


const router = createBrowserRouter([{
  path: "/",
  element : <Layout/>,
  children : [
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/post/:id",
      element :<Single/>
      
    },
    {
      path: "/write",
      element :<Write/>
      
    }
    
  ]

},

{
  path: "/login",
  element : 
  <Login/>

},
{
  path: "/register",
  element : <Register/>
},



])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <AuthContectProvider>
         <RouterProvider router = {router}/>
    </AuthContectProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
