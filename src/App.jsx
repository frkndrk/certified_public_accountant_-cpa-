import './App.css'
import Navbar from './components/navbar/Navbar'
import Topbar from './components/topBar/Topbar'
import Footer from "./components/footer/Footer"
import { Routes, Route, useLocation } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import ServicesPage from "./pages/servicesPage/ServicesPage"
import { useEffect } from 'react'
import OfficalPage from './pages/officalPage/OfficalPage'
import PartnersPage from './pages/partnersPage/PartnersPage'
import ContactPage from './pages/contactPage/ContactPage'
import ServicePage from './pages/servicePage/ServicePage'

function App() {

  const location = useLocation();

  useEffect(() => {
    if(!location.hash) {
      window.scrollTo(0, 0);
    }
    
  }, [location])
  

  return (
    <div className='app'>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/Anasayfa" element={<HomePage />}/>
        </Route>
        <Route path="/Hizmetlerimiz" element={<ServicesPage />}/>
        <Route path="/Kurumsal" element={<OfficalPage />}/>
        <Route path="/Ortaklarimiz" element={<PartnersPage />}/>
        <Route path="/Iletisim" element={<ContactPage />}/>
        <Route path="/Hizmetler" element={<ServicePage />}>
          <Route path=":serviceId" element={<ServicePage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
