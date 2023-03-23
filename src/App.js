import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Header from "./components/Header";




function App() {

  const Layout = ()=>{
    return(
      <>
      <Header/>
      <Outlet/>
      </>
      
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
  return (
    <div className=" mx-auto max-w-6xl px-5">
      
      <div className=" mx-auto">
        <div className="  flex flex-col mx-auto items-center  ">
          <RouterProvider router = {router}/> 
        </div>
        
      </div>

    </div>
  );
}



export default App;
