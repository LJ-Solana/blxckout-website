import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { About } from './components/Pages/About';
import { AuditBy } from './components/Pages/AuditBy';
import { Features } from './components/Pages/Features';

function App() {
  return (
   <>
   <Header/>
   <About/>
   <Features/>
   <AuditBy/>
   <Footer/>
   </>
  );
}

export default App;
