import Navbar from "./components/topbar/topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css";
import { BrowserRouter as Router, Switch, Rout} from 'react-router-dom';


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
