import Navbar from "./components/topbar/topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Products from "./pages/products/product";
import "./app.css";
import { Route,BrowserRouter as Routes } from "react-router-dom";



function App() {
  return (
   <Routes>
    <div className="App">
    <Navbar/>
      <div className="container">
          <Sidebar />
          <Home />
          <Route exact path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
      </div>
    </div>
      
      </Routes>

  );
}

export default App;
