import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Shared/Footer';
import Header from './Components/Shared/Header';
import Contact from './Components/Pages/Contact/Contact';
import Service from './Components/Pages/Service/Service';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
