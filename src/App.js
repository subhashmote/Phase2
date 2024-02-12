import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services';
import Moreabout from './components/Moreabout';
import Qand from './components/Qand';
import ProjectData from './data'
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Moreabout/>
      <Qand ProjectData={ProjectData}/>
      <Footer/>
    </div>
  );
}

export default App;
