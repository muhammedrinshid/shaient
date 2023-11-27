import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';

import {Home,Service,About} from './pages'
import Navbar from './assets/components/Navbar';


function App() {
  return (
      <BrowserRouter>
      <main className='relative w-full max-container'>
        <Navbar/>


        <Routes>
          <Route index element={<Home/>}/>
          <Route path='about'  element={<About/>}/>
          <Route path='service' element={<Service/>}/>
        </Routes>
      </main>
      
      </BrowserRouter>
  );
}

export default App;
