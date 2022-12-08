import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { About } from './components/Pages/About';
import { AuditBy } from './components/Pages/AuditBy';
import { Banner } from './components/Pages/Banner';
import { RoadMap } from './components/Pages/RoadMap';

function App() {
  return (
   <div className='bgmain'>
   <Header/>
    <Banner/>
   <About/>
   <RoadMap/>
   <AuditBy/>
   <Footer/>
   </div>
  );
}

export default App;
