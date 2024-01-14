import "./contactPage.scss"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { Link } from "react-router-dom";
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import buildOffical from "../../assets/plaza5.jpg"
import buildImg from "../../assets/build21.jpeg";
import callservice from "../../assets/callservice.jpg";
import { useState } from "react";
import HexagonIcon from '@mui/icons-material/Hexagon';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import logoBlack from "../../assets/logoBlack.png"


const ContactPage = () => {

  const [btnState, setBtnState] = useState(false)
  const [btnTxt, setBtnTxt] =  useState("Gönder")
  const [icon, setIcon] = useState()
  const [focused, setFocused] = useState(false)

  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleClick = (e) => {
    e.preventDefault();

    if(values.phone === "" || values.email ==="") {
      alert("Lütfen istenilen bilgileri doldurunuz!")
    } else {
      setBtnState(true)
      setBtnTxt("Gönderiliyor...")
      setIcon(<HexagonIcon />)
      setTimeout(() => {
        setBtnState(false)
        setBtnTxt("Gönderildi")
        setIcon(<FileDownloadDoneIcon />)
        setValues({
          name: "",
          surname: "",
          email: "",
          phone: "",
          message: ""
        })
      }, 3000);
    }

    

    const formData = new FormData(e.target)
    const payLoad = Object.fromEntries(formData)
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <div className='contactPage'>
        <div className="imgContB1">
          <img src={buildOffical} alt="Enka, enkaymm, Enka YMM, enka ymm, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi, kdv iade, danışmanlık" />
          <div className='textOff'>
            <h1>İletişim</h1>
            <h2>Danışmak istediğiniz sorularınız için lütfen arayın</h2>
          </div>
        </div>
        <div className="formCont">
          <div className="map-place">
            <div className="map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d765.292876069947!2d32.719097869616085!3d39.89279229822055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347805ef3dad1%3A0x489fb749914ff743!2sMutlukent%2C%202038.%20Sk.%2C%2006800%20%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1704056857673!5m2!1str!2str" 
                width="100%" 
                height="100%"
                style={{border: "0"}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className="place">
              <img src={buildImg} alt="Enka, enkaymm, Enka YMM, enka ymm, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi, kdv iade, danışmanlık" />
            </div>
          </div>
        </div>
        <div className="formCont2">
          <div className="info-desc">
            <div className="info">
              <div className="infoCont">
                <h4>Sabit Hattımız</h4>
                <h3>0312 123 45 67</h3>
                <h4>Sabit Hattımız</h4>
                <h3>0 554 358 25 38</h3>
                <h4>E-Mail Adresimiz</h4>
                <h3>info@enkaymm.com</h3>
                <h4>Ofis Adresimiz</h4>
                <h3>Mutlukent Mah. 2038.Sokak No: 7 Çankaya/Ankara</h3>
                <span></span>
                <div className="icons">
                  <ul>
                    <li><TwitterIcon fontSize="10px"/></li>
                    <li><FacebookIcon fontSize="10px"/></li>
                    <li><InstagramIcon fontSize="10px"/></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="desc">
              <img src={callservice} alt="Enka, enkaymm, Enka YMM, enka ymm, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi, kdv iade, danışmanlık" />
              <h2 className="descHeader">Detaylı bilgi almak için arayabilirsiniz.</h2>
            </div>
          </div>
        </div>
        <div className="coffeeCont">
          <div className="textA1">
            <h4>ENKA YMM</h4>
            <h1>Kahve içmeye bekleriz <CoffeeIcon fontSize=""/></h1>
            <button className="btnA1"><Link className="link" to="/Iletisim">İletişim</Link></button>
          </div>
          <div className="contA1-1"></div>
        </div>
        <div className="formCont3">
          <div className="logoCont">
            <img className="logo" src={logoBlack} alt="Enka, enkaymm, Enka YMM, enka ymm, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi, kdv iade, danışmanlık"></img>
          </div>
          <h1>İletişim Formu</h1>
          <div className="form">
            <form onSubmit={handleClick}>
              <input onChange={onChange} type="text" name="name" placeholder="Adınız" value={values.name}/>
              <input onChange={onChange} type="text" name="surname" placeholder="Soyadınız" value={values.surname}/>
              <input onChange={onChange} type="email" name="email" placeholder="E-Mail Adresiniz" value={values.email} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" onBlur={handleFocus} focused={focused.toString()}/>
              <input onChange={onChange} type="tel" name="phone" placeholder="Telefon Numaranız" value={values.phone} pattern="^[0-9]{11}$" onBlur={handleFocus} focused={focused.toString()}/>
              <textarea onChange={onChange} name="message" cols="30" rows="15" placeholder="Mesajınız" value={values.message}></textarea>
              <div className="btnFC">
                <button className={btnState ? "btn-fc3 active" : "btn-fc3"}><span className={btnState && "activeIcon"}>{icon}</span>{btnTxt}</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default ContactPage