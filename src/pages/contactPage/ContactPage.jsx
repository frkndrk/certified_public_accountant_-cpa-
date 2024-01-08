import "./contactPage.scss"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { Link } from "react-router-dom";
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
const ContactPage = () => {
  return (
    <div className='contactPage'>
        <div className="imgContB1">
          <img src="../../src/assets/plaza3.webp" alt="" />
          <div className='textOff'>
            <h1>İletişim</h1>
            <h2>Danışmak istediğiniz sorularınız için aramaktan çekinmeyin</h2>
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
              <img src="../../src/assets/build21.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div className="formCont2">
          <div className="info-desc">
            <div className="info">
              <div className="infoCont">
                <h4>Sabit Hattımız</h4>
                <h3>0312 245 87 90</h3>
                <h4>Sabit Hattımız</h4>
                <h3>0543 123 65 78</h3>
                <h4>E-Mail Adresimiz</h4>
                <h3>info@enkaymm.com</h3>
                <h4>Ofis Adresimiz</h4>
                <h3>Mutlukent Mah. 2038.Sokak Çankaya/Ankara</h3>
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
              <img src="../../src/assets/callservice.jpg" alt="" />
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
          <span><AlignVerticalTopIcon /></span>
          <h2>EnKa YMM</h2>
          <h1>İletişim Formu</h1>
          <div className="form">
            <form action="">
              <input type="text" name="name" placeholder="Adınız"/>
              <input type="text" name="surname" placeholder="Soyadınız"/>
              <input type="email" name="email" placeholder="E-Mail Adresiniz"/>
              <input type="tel" name="phone" placeholder="Telefon Numaranız"/>
              <textarea name="" id="" cols="30" rows="15" placeholder="Mesajınız"></textarea>
              <div className="btnFC">
                <button className="btn-fc3">Gönder</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default ContactPage