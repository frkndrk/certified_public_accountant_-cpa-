import "./home.scss"
import React, { useEffect, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Home = () => {

  const [currentState, setCurrentState] = useState(0)

  const homeImages = [
    {
      id: 1,
      img: "../../src/assets/plaza1.webp",
      descH2: "MusEn YMM",
      descH1: "2023 Sirküler",
      desc1: "DAHA FAZLASI İÇİN" 
    },
    {
      id: 2,
      img: "../../src/assets/working.png",
      descH2: "MusEn YMM",
      descH1: "Denetim Tasdik",
      desc1: "TEKLİF AL",
      desc2: "HIZLI İLETİŞİM"
    },
    {
      id: 3,
      img: "../../src/assets/working-done.webp",
      descH2: "MusEn YMM",
      descH1: "Mali Müşavirlik",
      desc1: "TEKLİF AL",
      desc2: "HIZLI İLETİŞİM"
    },
    {
      id: 4,
      img: "../../src/assets/customer-service.jpg",
      descH2: "MusEn YMM",
      descH1: "Danışmanlık Hizmeti",
      desc1: "TEKLİF AL",
      desc2: "HIZLI İLETİŞİM"
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
  
  const clickArrowLeft = () => {
    if(currentState === 0) {
      setCurrentState(3)
    } else {
      setCurrentState(currentState - 1)
    }
  }
  
  const clickArrowRight = () => {
    if(currentState === 3) {
      setCurrentState(0)
    } else {
      setCurrentState(currentState + 1)
    }
  }

  return (
    <div className="home">
      <div className="contHome">
        {homeImages.map((image,index) => (
          <img
            key={index}
            className="homeImg"
            src={image.img}
            alt="yeminli mali müşsavir, ymm, ymm ankara, müşavir, musavir"
            style={{ opacity: index === currentState ? 0.5 : 0 }}
          />
        ))}
      </div>
      <div className="contHome1">
        {homeImages.map((item, index) => (
          <div className="header"
            key={index}
            style={{opacity: index === currentState ? 1 : 0}}>
            <h2>{item.descH2}</h2>
            <h1>{item.descH1}</h1>
            {homeImages.map((item, index) => (
              <div key={index} className="buttons" style={{position: "absolute"}}>
                <button style={{opacity: index === currentState ? 1 : 0}}>{item.desc1}</button>
                <button style={{opacity: index === currentState ? 1 : 0, display: !item.desc2 && "none"}}>{item.desc2}</button>
              </div>  
            ))}
          </div>
        ))}
        <div className="shape" /* style={{backgroundImage: `url("../../src/assets/foto.jpg")`, backgroundSize: "cover"}} */>
        </div>
      </div>
      <div className="shape2">
        <img className="shapeImg" src="../../src/assets/dots2.png" alt="" />
      </div>
      {/* <div className="dots">
        <div className="dot">
          <div className="dot-out"></div>
        </div>
        <div className="dot">
          <div className="dot-out"></div>
        </div>
        <div className="dot">
          <div className="dot-out"></div>
        </div>
        <div className="dot">
          <div className="dot-out"></div>
        </div>
      </div> */}
      <div className="arrows">
        <button onClick={clickArrowLeft} className="left"><ArrowBackIosNewIcon /></button>
        <button onClick={clickArrowRight} className="right"><ArrowBackIosNewIcon /></button>
      </div>
      <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </div>
  )
}

export default Home


/* <img data-aos="fade-down" style={{width: "100vw", height: "100vh", position: "absolute", bottom: "0", objectFit: "cover", zIndex: "1"}} src="../../src/assets/mountain.png" alt="yeminli mali müşsavir, ymm, ymm ankara, müşavir, musavir" />
<img data-aos="fade-up" style={{width: "100vw", height: "400px", position: "absolute", bottom: "0", zIndex: "2"}} src="../../src/assets/forest.png" alt="yeminli mali müşsavir, ymm, ymm ankara, müşavir, musavir" />
<img data-aos="fade-down" style={{width: "100vw", height: "400px", position: "absolute", top: "-100px", transform: "rotate(180deg)", zIndex: "0"}} src="../../src/assets/clouds2.png" alt="yeminli mali müşsavir, ymm, ymm ankara, müşavir, musavir" />
 */