import Navbar from "./components/topbar/topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
          <Sidebar />
          <Home />
      </div>
    </div>
  );
}

export default App;
