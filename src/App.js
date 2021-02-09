import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'

import Banner from './components/Banner';
import Development from './components/Development';
import Slider from './components/Slider';
import Client from './components/Client';
import Articles from './components/Articles';
import Footer from './components/Footer';
function App() {
  return (
  <section className='haha'>
    <div className="App">
      
    <Navbar />
     <Banner />
     
     </div>
     <Development />
     <Slider />
     <Client />
     <Articles />
     <Footer />
    
    
    </section>
    

  );
}

export default App;
