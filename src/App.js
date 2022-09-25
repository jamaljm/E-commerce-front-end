import Navbar from "./components/topbar/topbar"
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
          <Sidebar />
      </div>
    </div>
  );
}

export default App;
