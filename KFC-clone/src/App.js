import './App.css';
import Navbar from "./Components/navbar/Navbar";
// import Home from './Components/home/Home';


import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes />
     <Footer/>
    </div>
  );
}

export default App;
