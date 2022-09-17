import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/Pages/About/About';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Shared/Footer';
import Header from './Components/Shared/Header';
import Contact from './Components/Pages/Contact/Contact';
import Service from './Components/Pages/Service/Service';
import Pricing from './Components/Pages/Pricing/Pricing';
import Portfolio from './Components/Pages/Portfolio/Portfolio';
import Blog from './Components/Pages/Blog/Blog';

import FAQ from './Components/Pages/About/FAQ';
import Terms from './Components/Pages/About/Terms';
import History from './Components/Pages/About/History';
import NotFound from './Components/Shared/NotFound';



function App() {
  return (
    <div className='app' >
      <Header></Header>
      <Routes>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
       
        <Route path='/faq' element={<FAQ></FAQ>}></Route>
        <Route path='/terms' element={<Terms></Terms>}></Route>
        <Route path='/history' element={<History></History>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
