import "./aboutUs.scss"
import React from 'react'

const AboutUs = () => {
  const services = [
    {
      id: 1,
      name: "Tam Tasdik",
      img: "../../src/assets/working-done.webp"
    },
    {
      id: 2,
      name: "KDV ile ÖTV İadesi ve Mahsup İşlemleri",
      img: ""
    },
    {
      id: 3,
      name: "Vergi Uyuşmazlıkları",
      img: ""
    },
    {
      id: 4,
      name: "Şirketler Hukuku Alanında",
      img: ""
    },
    {
      id: 5,
      name: "Vergi ve Revizyon Konusunda Danışmanlık",
      img: ""
    },
    {
      id: 6,
      name: "Vergi ve Muhasebe Yönetsel Danışmanlık",
      img: ""
    },
    {
      id: 7,
      name: "Yönetsel Danışmanlık",
      img: ""
    },
    {
      id: 8,
      name: "Diğer Denetim İşlemleri",
      img: ""
    },
    {
      id: 9,
      name: "Diğer Tasdik İşlemleri",
      img: ""
    }
  ]

  return (
    <div className='aboutUs'>
      <div className="contHeader">
        <h2>MusEn YMM</h2>
        <h1>Hizmet Alanlarımız</h1>
      </div>
      <div className="contCards">
        <div className="contImg">
          <img src={services[0].img} alt=""/>
        </div>
        <div className="contName">
          <h3>{services[0].name}</h3>
        </div>
        <div className="contImg">
          <img src={services[0].img} alt=""/>
        </div>
        <div className="contName">
          <h3>{services[0].name}</h3>
        </div>
        <div className="contImg">
          <img src={services[0].img} alt=""/>
        </div>
        <div className="contName">
          <h3>{services[0].name}</h3>
        </div>
        <div className="contImg">
          <img src={services[0].img} alt=""/>
        </div>
        <div className="contName">
          <h3>{services[0].name}</h3>
        </div>
      </div>
    </div>
  )
}

export default AboutUs