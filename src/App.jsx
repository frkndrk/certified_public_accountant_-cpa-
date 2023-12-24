import './App.css'
import Navbar from './components/navbar/Navbar'
import Topbar from './components/topBar/Topbar'
import Footer from "./components/footer/Footer"
import { Routes, Route, useLocation } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import ServicesPage from "./pages/servicesPage/ServicesPage"
import { useEffect } from 'react'

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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
