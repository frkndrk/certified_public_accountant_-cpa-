import './App.css'
import AboutUs from './components/aboutUs/AboutUs'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Topbar from './components/topBar/Topbar'

function App() {
  

  return (
    <div className='app'>
      <Topbar />
      <Navbar />
      <Home />
      <AboutUs />
    </div>
  )
}

export default App
