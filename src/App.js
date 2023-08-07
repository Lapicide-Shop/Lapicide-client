import { Route, Routes } from 'react-router-dom';
import './App.css';



import Navbar from "./composents/Navbar"
import Header from "./composents/Header"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Cursor from './composents/Cursor';

function App() {
  return (
    <div>
      <Header />
      <Cursor />

      
      <Routes>
        <Route path='/'  element={<Homepage/>} />
        <Route path='/about' element={<About /> } />
        <Route path='/shop' element={<Shop />}/>
      </Routes>

      <Navbar />
    </div>
  );
}

export default App;
