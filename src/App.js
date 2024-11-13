import { Route, Routes } from 'react-router-dom';
import './App.css'; 


import Home from './components/Home';
import Nav from './components/Nav';
import Title from './components/Title';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Title/>
    <div className='top-0 sticky z-10'><Nav/></div>
      <Routes>
         <Route path='/' element={<Home/>} />

      </Routes>
    <Footer/>
  
    </div>
  );
}

export default App;
