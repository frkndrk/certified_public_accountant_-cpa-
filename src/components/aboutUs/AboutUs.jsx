import "./aboutUs.scss"
import React, { useEffect, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import CallIcon from '@mui/icons-material/Call'
import { Link } from "react-router-dom";

const AboutUs = () => {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectId, setSelectId] = useState(0)

  useEffect(() => {
        const timer = setTimeout(() => {
          if(currentSlide === 5) {
            setCurrentSlide(0)
          } else {
            setCurrentSlide(currentSlide + 1)
          }
        }, 5000)
        return () => clearTimeout(timer)
  }, [currentSlide])
  
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 5)
      : setCurrentSlide(currentSlide < services.length - 3 ? currentSlide + 1 : 0)
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
      name: "Diğer Denetim İşlemleri",
      img: "../../src/assets/calculate2.jpg"
    },
    {
      id: 8,
      name: "Diğer Tasdik İşlemleri",
      img: "../../src/assets/handShake3.webp"
    }
  ]

  return (
    <div className='aboutUs'>
      <div className="contHeader">
        <span><AlignVerticalTopIcon /></span>
        <h2>MusEn YMM</h2>
        <h1>Hizmet Alanlarımız</h1>
      </div>
      <div className="container">
        <div className="slider">
          {services.map((item) => (
            <Link to={"/Hizmetler/" + `${item.id}`} style={{textDecoration: "none", color: "#000000"}}>
              <div key={item.id} className="contCards" style={{transform: `translateX(-${currentSlide * 370}px)`}} onClick={() => setSelectId(item.id)}>
                <div className="card">
                  <div className="contImg">
                    <img src={item.img} alt=""/>
                  </div>
                  <div className="contName">
                    <h3>{item.name}</h3>
                  </div>
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
            <h1>Sizlere Hizmet Vermekten Mutluluk Duyuyoruz</h1>
            <p className="desc1">Dürüstlük ve güveni ilke edinen şirketimizin amacı; kurumsallaşma yolunda, ulusal ve uluslararası meslek etiğine bağlı, sürekli kendini yenileme ve yaşam boyu öğrenmenin gerekliliğine olan inançla müşterilerimizin ihtiyaçlarına en uygun profesyonel çözümleri zamanında sunmak ve müşterilerimizin çalışmalarına değer katmaktır.<br/>MusEn, yerli ve yabancı bireysel ve kurumsal tüm müşterilere vergi, muhasebe, mali hukuk ve finansal alanlarda denetim ve danışmanlık hizmeti sunmaktadır.</p>
            <div className="cont1">
            <Link to="/Kurumsal" style={{textDecoration: "none", color: "#fff"}}><button style={{cursor: "pointer", height: "60px"}}>DEVAMI İÇİN</button></Link>
              <div className="contact">
                <ul>
                  <li><CallIcon style={{backgroundColor: "#aaa", color: "white", borderRadius: "50%", padding: "15px"}} /></li>
                  <li>
                    <p className="fontColor">Sabit Hattımız</p>
                    <p className="fontColor">444 01 01</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="descImg">
          <img className="desc2" src="../../src/assets/shape1.png" alt="" />
          <img className="desc3" src="../../src/assets/handShake4.jpeg" alt="" />
          <img className="desc4" src="../../src/assets/polkadots.png" alt="" />
        </div>
      </div>
      <div className="contA1">
        <div className="textA1">
          <h4>MUSEN YMM</h4>
          <h1>Denetim, Tasdik ve Danışmanlık Alanlarında Bizlere Ulaşabilirsiniz.</h1>
          <button className="btnA1"><Link className="link" to="/Iletisim">İletişim</Link></button>
        </div>
        <div className="contA1-1"></div>
      </div>
    </div>
  )
}

export default AboutUs