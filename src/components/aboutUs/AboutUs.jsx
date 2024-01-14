import "./aboutUs.scss"
import React, { useEffect, useRef, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import CallIcon from '@mui/icons-material/Call'
import { Link } from "react-router-dom";
import service1 from "../../assets/working-done.webp"
import service2 from "../../assets/dualMeeting.jpg"
import service3 from "../../assets/calculate1.jpg"
import service4 from "../../assets/handShake1.jpg"
import service5 from "../../assets/laughing.jpg"
import service6 from "../../assets/computer.jpg"
import service7 from "../../assets/calculate2.jpg"
import service8 from "../../assets/handShake3.webp"
import shape from "../../assets/shape1.png"
import handShake from "../../assets/handShake4.jpeg"
import polkadots from "../../assets/polkadots.png"
import logoWhite from "../../assets/logoWhite.png"
import logoBlack from "../../assets/logoBlack.png"

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
      const timer = setTimeout(() => {
        if(currentSlide === 5) {
          setCurrentSlide(0)
        } else {
          setCurrentSlide(currentSlide + 1)
        }
      }, 5000)
      return () => clearTimeout(timer)
  },[currentSlide])
  
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 5)
      : setCurrentSlide(currentSlide < services.length - 3 ? currentSlide + 1 : 0)
  }

  const services = [
    {
      id: 1,
      name: "Tam Tasdik",
      img: service1
    },
    {
      id: 2,
      name: "KDV ile ÖTV İadesi ve Mahsup İşlemleri",
      img: service2
    },
    {
      id: 3,
      name: "Vergi Uyuşmazlıkları",
      img: service3
    },
    {
      id: 4,
      name: "Şirketler Hukuku Alanında",
      img: service4
    },
    {
      id: 5,
      name: "Vergi ve Revizyon Konusunda Danışmanlık",
      img: service5
    },
    {
      id: 6,
      name: "Vergi ve Muhasebe Yönetsel Danışmanlık",
      img: service6
    },
    {
      id: 7,
      name: "Diğer Denetim İşlemleri",
      img: service7
    },
    {
      id: 8,
      name: "Diğer Tasdik İşlemleri",
      img: service8
    }
  ]

  return (
    <div className='aboutUs'>
      <div className="contHeader">
        <div className="logoCont">
          <img className="logo" src={logoBlack} alt=""></img>
        </div>
        <h1>Hizmet Alanlarımız</h1>
      </div>
      <div className="container">
        <div className="slider">
          {services.map((item) => (
            <Link to={"/Hizmetler/" + `${item.id}`} style={{textDecoration: "none", color: "#000000"}}>
              <div key={item.id} className="contCards" style={{transform: `translateX(-${currentSlide * 370}px)`}}>
                <div className="card">
                  <div className="contImg">
                    <img src={item.img} alt=""/>
                  </div>
                  <div className="contName">
                    <h3>{item.name}</h3>
                  </div>
                </div>
                <div className="hvrCnt">
                  <h1>EnKa YMM</h1>
                  <h3>Hizmet Alanlarımız</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="slider2">
          {services.map((item) => (
            <Link to={"/Hizmetler/" + `${item.id}`} style={{textDecoration: "none", color: "#000000"}}>
              <div key={item.id} className="contCards2">
                <div className="card2">
                  <div className="contImg2">
                    <img src={item.img} alt=""/>
                  </div>
                  <div className="contName2">
                    <h3>{item.name}</h3>
                  </div>
                </div>
                <div className="hvrCnt2">
                  <h1>EnKa YMM</h1>
                  <h3>Hizmet Alanlarımız</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="leftArrow" onClick={() => handleClick("left")}><ArrowBackIosNewIcon /></div>
        <div className="rightArrow" onClick={() => handleClick()} style={{transform: "rotate(180deg)", zIndex: "40"}}><ArrowBackIosNewIcon /></div>
      </div>
      <div className="toCustomer">
        <div className="description">
          <div className="descCont">
            <h1>Birlikte Daha Güçlü Yarınlara</h1>
            <p className="desc1">Firmamız dürüstlüğü, güvenirliliği, ulaşılabilirliği ve dinamizmi ilke edinerek müşterilerimize ve paydaşlarımıza hizmet vermeyi , sunmuş olduğu hizmetlerin kalitesinde evrensel düzeyi yakalamayı amaç edinmiştir. Bu kapsamda genç, dinamik , vizyoner ve uzman kadrolarımız ile müşteri ve paydaşlarımızın ticari hayatlarına katma değer yaratarak hizmet vermekteyiz.</p>
            <div className="cont1">
              <Link to="/Kurumsal" style={{textDecoration: "none", color: "#fff"}}><button>DEVAMI İÇİN</button></Link>
              <div className="contact">
                <ul>
                  <li className="clIcn" style={{backgroundColor: "rgb(136, 136, 137)", color: "white", borderRadius: "50%"}}><CallIcon /></li>
                  <li>
                    <p className="fontColor">Sabit Hattımız</p>
                    <p className="fontColor">0 554 358 25 38</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="descImg">
          <img className="desc2" src={shape} alt="" />
          <img className="desc3" src={handShake} alt="" />
          <img className="desc4" src={polkadots} alt="" />
        </div>
      </div>
      <div className="contA1">
        <div className="textA1">
          <h4>ENKA YMM</h4>
          <h1>Denetim, Tasdik ve Danışmanlık Alanlarında Bizlere Ulaşabilirsiniz.</h1>
          <button className="btnA1"><Link className="link" to="/Iletisim">İletişim</Link></button>
        </div>
        <div className="contA1-1"></div>
      </div>
    </div>
  )
}

export default AboutUs

/* useEffect(() => {
  if(window.innerWidth <= 930) {
    setNavbar(true);
  } else {
    setNavbar(false)
    const timer = setTimeout(() => {
      if(currentSlide === 5) {
        setCurrentSlide(0)
      } else {
        setCurrentSlide(currentSlide + 1)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }
},[currentSlide]) */