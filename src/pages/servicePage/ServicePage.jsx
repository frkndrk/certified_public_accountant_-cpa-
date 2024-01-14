import { useEffect, useState } from "react"
import "./servicePage.scss"
import CallIcon from '@mui/icons-material/Call'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Dos1 from "../../components/detailsOfService/Dos1";
import Dos2 from "../../components/detailsOfService/Dos2";
import Dos3 from "../../components/detailsOfService/Dos3";
import Dos4 from "../../components/detailsOfService/Dos4";
import Dos5 from "../../components/detailsOfService/Dos5";
import Dos6 from "../../components/detailsOfService/Dos6";
import Dos7 from "../../components/detailsOfService/Dos7";
import Dos8 from "../../components/detailsOfService/Dos8";
import { Link, useParams } from "react-router-dom";
import service1 from "../../assets/working-done.webp"
import service2 from "../../assets/dualMeeting.jpg"
import service3 from "../../assets/calculate1.jpg"
import service4 from "../../assets/handShake1.jpg"
import service5 from "../../assets/laughing.jpg"
import service6 from "../../assets/computer.jpg"
import service7 from "../../assets/calculate2.jpg"
import service8 from "../../assets/handShake3.webp"
import meeting from "../../assets/meeting4.jpg"
import analytics2 from "../../assets/analytics2.webp"
import meeting6 from "../../assets/meeting6.jpg"
import customerService from "../../assets/customer-service.jpg"
import plaza3 from "../../assets/plaza3.webp"
import callservice2 from "../../assets/callservice.jpg"


const ServicePage = () => {

  const [selectId, setSelectId ] = useState()

  const dosAll = [
    {
      id: 1,
      compDos: <Dos1 />
    },
    {
      id: 2,
      compDos: <Dos2 />
    },
    {
      id: 3,
      compDos: <Dos3 />
    },
    {
      id: 4,
      compDos: <Dos4 />
    },
    {
      id: 5,
      compDos: <Dos5 />
    },
    {
      id: 6,
      compDos: <Dos6 />
    },
    {
      id: 7,
      compDos: <Dos7 />
    },
    {
      id: 8,
      compDos: <Dos8 />
    }
  ]

  const {serviceId} = useParams();

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
    
    const [currentState, setCurrentState] = useState(0)

    const homeImages = [
        {
        id: 1,
        img: meeting
        },
        {
        id: 2,
        img: analytics2
        },
        {
        id: 3,
        img: meeting6
        },
        {
        id: 4,
        img: customerService
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
    <div className='servicePage'>
        <div className="imgContB1">
          <img src={plaza3} alt="" />
          <div className='textOff'>
            <h1>{serviceId ? `${services[serviceId - 1].name}` : "Hizmetler"}</h1>
            <h2>Sizlere Hizmet Vermekten Mutluluk Duyuyoruz</h2>
          </div>
        </div>
        <div className="contServ">
            <div className="cs1">
                <div className="cs1A">
                    <ul>
                        {services.map((item, index) => (
                            <Link to={`${item.id}`} style={{textDecoration: "none"}} onClick={() => setSelectId(item.id)}><li key={index}>{item.name}</li></Link>
                        ))}
                    </ul>
                </div>
                <div className="cs1B">
                    <img src={callservice2} alt="" />
                    <h1>Detaylı Bilgi İçin Arayabilirsiniz</h1>
                    <span><CallIcon /></span>
                    <p className="p1">Sabit Hattımız</p>
                    <p className="p2">444 01 01</p>
                </div>
            </div>
            <div className="cs2">
                <div className="cs2A">
                    {homeImages.map((image,index) => (
                        <img
                            key={index}
                            className="homeImg"
                            src={image.img}
                            alt="yeminli mali müşsavir, ymm, ymm ankara, müşavir, musavir"
                            style={{ opacity: index === currentState ? 0.7 : 0 }}
                        />
                    ))}
                    <div className="hoverCt">
                        <div className="hoverCont">
                          <h1>MusEn YMM ve Danışmanlık A.Ş.</h1>
                        </div>
                    </div>
                    <div className="arrows">
                        <button onClick={clickArrowLeft} className="left"><ArrowBackIosNewIcon /></button>
                        <button onClick={clickArrowRight} className="right"><ArrowBackIosNewIcon /></button>
                    </div>
                </div>
                <div className="cs2B">
                    {serviceId ? dosAll[serviceId - 1].compDos : <Dos1 />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicePage