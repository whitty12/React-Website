//import logo from './logo.svg';
import './App.css';
import './styles.css';
//import RentalPage from './pages/RentalPage';
//import HomePage from './pages/homePage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import PropertiesPage from './pages/PropertiesPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className='App'>
      <Navigation></Navigation>
      <Header />
        <Routes>
          <Route path ='/' element={<PropertiesPage />}/>
          <Route path ='about' element={<AboutPage/>} />
          <Route path ='contact' element={<ContactPage/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
