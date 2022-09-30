

import Navbar from "./components/topbar/topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Products from "./pages/products/product";
import "./app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  return (
<>
   
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
      <Routes>
        
        
        <Route path="/"
        element={<Home/>}/>
         <Route path="/products" element={<Products />}/>
        
      </Routes>
    
    </BrowserRouter>  
</>

  );
}

export default App;
