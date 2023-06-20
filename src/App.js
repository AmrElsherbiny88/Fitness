import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import excersiceDetails from './Pages/excersiceDetails';
import Footer from './Components/Footer/footer';
import Navbar from "./Components/Navbarr/Navbar";

function App() {
  return (

    <BrowserRouter >
      
    <Navbar/>
     
     <Routes >
       <Route path='/' element={<Home/>}/>
       <Route path='/excersice/:id' element={<excersiceDetails.js/>}/>
     </Routes>
       
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
