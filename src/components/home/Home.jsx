import "./home.scss"
import React, { useEffect, useState } from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';

const Home = () => {

  const [currentState, setCurrentState] = useState(0)

  const homeImages = [
    {
      id: 1,
      img: "../../src/assets/plaza1.webp"
    },
    {
      id: 2,
      img: "../../src/assets/working.png"
    },
    {
      id: 3,
      img: "../../src/assets/working-done.webp"
    },
    {
      id: 4,
      img: "../../src/assets/customer-service.jpg"
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      if(currentState === 3) {
        setCurrentState(0)
      } else {
        setCurrentState(currentState + 1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [currentState])

  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
  
  const bgImage = {
    backgroundImage: `url(../../src/assets/plaza1.webp)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",

  }
  return (
    <div className="home">
      <div className="contHome">
        {homeImages.map((image,index) => (
          <img
            key={index}
            className={`homeImg ${index === currentState ? 'active' : ''}`}
            src={image.img}
            alt="yeminli mali müşsavir, ymm, ymm ankara, müşavir, musavir"
            style={{ opacity: index === currentState ? 0.5 : 0 }}
          />
        ))}
        
      </div>
      <div className="contHome1">
        <img style={{zIndex: "-1"}} src="../../src/assets/foto.jpg" alt="yeminli mali müşsavir, ymm, ymm ankara, müşavir, musavir" />
        <div className="header">
          <h2>MusEn YMM</h2>
          <h1>2023 Sirküler</h1>
        </div>
        <div className="shape" /* style={{backgroundImage: `url("../../src/assets/foto.jpg")`, backgroundSize: "cover"}} */>
        </div>
      </div>
    </div>
  )
}

export default Home


/* <img data-aos="fade-down" style={{width: "100vw", height: "100vh", position: "absolute", bottom: "0", objectFit: "cover", zIndex: "1"}} src="../../src/assets/mountain.png" alt="yeminli mali müşsavir, ymm, ymm ankara, müşavir, musavir" />
<img data-aos="fade-up" style={{width: "100vw", height: "400px", position: "absolute", bottom: "0", zIndex: "2"}} src="../../src/assets/forest.png" alt="yeminli mali müşsavir, ymm, ymm ankara, müşavir, musavir" />
<img data-aos="fade-down" style={{width: "100vw", height: "400px", position: "absolute", top: "-100px", transform: "rotate(180deg)", zIndex: "0"}} src="../../src/assets/clouds2.png" alt="yeminli mali müşsavir, ymm, ymm ankara, müşavir, musavir" />
 */