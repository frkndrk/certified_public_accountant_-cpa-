import "./aboutUs.scss"
import React, { useEffect, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const AboutUs = () => {

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const scrollDown = () => {
        if(window.scrollY >= 200) {
          if(currentSlide === 5) {
            setCurrentSlide(0)
          } else {
            setCurrentSlide(currentSlide + 1)
          }
        }
      }
      window.addEventListener("scroll", scrollDown)
    }, 5000)
    return () => clearTimeout(timer)
    
  }, [currentSlide])
  
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 6)
      : setCurrentSlide(currentSlide < services.length - 4 ? currentSlide + 1 : 0)
  }

  const services = [
    {
      id: 1,
      name: "Tam Tasdik",
      img: "../../src/assets/working-done.webp"
    },
    {
      id: 2,
      name: "KDV ile ÖTV İadesi ve Mahsup İşlemleri",
      img: "../../src/assets/dualMeeting.jpg"
    },
    {
      id: 3,
      name: "Vergi Uyuşmazlıkları",
      img: "../../src/assets/calculate1.jpg"
    },
    {
      id: 4,
      name: "Şirketler Hukuku Alanında",
      img: "../../src/assets/handShake1.jpg"
    },
    {
      id: 5,
      name: "Vergi ve Revizyon Konusunda Danışmanlık",
      img: "../../src/assets/laughing.jpg"
    },
    {
      id: 6,
      name: "Vergi ve Muhasebe Yönetsel Danışmanlık",
      img: "../../src/assets/computer.jpg"
    },
    {
      id: 7,
      name: "Yönetsel Danışmanlık",
      img: "../../src/assets/handShake2.avif"
    },
    {
      id: 8,
      name: "Diğer Denetim İşlemleri",
      img: "../../src/assets/calculate2.jpg"
    },
    {
      id: 9,
      name: "Diğer Tasdik İşlemleri",
      img: "../../src/assets/handShake3.webp"
    }
  ]

  return (
    <div className='aboutUs'>
      <div className="contHeader">
        <h2>MusEn YMM</h2>
        <h1>Hizmet Alanlarımız</h1>
      </div>
      <div className="container">
        <div className="slider">
          {services.map((item) => (
            <div key={item.id} className="contCards" style={{transform: `translateX(-${currentSlide * 370}px)`}}>
              <div className="card">
                <div className="contImg">
                  <img src={item.img} alt=""/>
                </div>
                <div className="contName">
                  <h3>{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="leftArrow" onClick={() => handleClick("left")}><ArrowBackIosNewIcon /></div>
        <div className="rightArrow" onClick={() => handleClick()} style={{transform: "rotate(180deg)", zIndex: "40"}}><ArrowBackIosNewIcon /></div>
      </div>
    </div>
  )
}

export default AboutUs