import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Clients from './Pages/Clintes';
import Jobs from './Pages/Jobs';
import HowItWorks from './Pages/HowItWorks';
import Hire from './Pages/Hire';
import NotFound from './Pages/NotFound';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/TermsAndConditions';
function App() {  
  return (
    <div className="App">

      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/services' element={<Services />} />
         <Route path='/hire'element={<Hire/>}/>
         <Route path='/contact' element={<Contact />} />
        <Route path='/clients'element ={<Clients/>}/>
        <Route path='/jobs'element={<Jobs/>}/>
       <Route path='/work'element={<HowItWorks/>}/>
        <Route path='/notfound'element={<NotFound/>}/>
        <Route path='/privacy'element={<PrivacyPolicy/>}/>
        <Route path='/terms'element={<TermsConditions/>}/>


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
