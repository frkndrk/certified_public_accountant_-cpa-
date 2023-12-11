import "./navbar.scss"
import CallIcon from '@mui/icons-material/Call'

const Navbar = () => {

  
  return (
    <div className="navbar" >
      <div className="cont1">
        <div className="logo">
          <h1>MusEn</h1>
          <p>Güvenle</p>
        </div>
        <div className="menu">
          <ul>
            <li>Anasayfa</li>
            <li>Kurumsal</li>
            <li>Hizmetlerimiz</li>
            <li>Mevzuat</li>
            <li>Haberler</li>
            <li>İletişim</li>
          </ul>
        </div>
        <div className="contact">
          <ul>
            <li><CallIcon style={{backgroundColor: "#fff", color: "black", borderRadius: "50%", padding: "10px"}} /></li>
            <li>
              <p>Sabit Hattımız</p>
              <p>444 01 01</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar