import { useState } from "react"
import "./navbar.scss"
import CallIcon from '@mui/icons-material/Call'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from "react-router-dom"
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import logoWhite from "../../assets/logoWhite.png"
import logoBlack from "../../assets/logoBlack.png"

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollNum = () => {
    if(window.scrollY >= 50) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  } 

  window.addEventListener("scroll", scrollNum )

  
  return (
    <div className={navbar ? "navbar active" : "navbar"} style={{position: navbar && "fixed", top: navbar && "0"}}>
      <div className="cont1">
        <div className="logoCont">
          <Link to="/Anasayfa"><img className="logo" src={navbar ? `${logoWhite}` : `${logoBlack}`} alt="Enka, enkaymm, Enka YMM, enka ymm, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi, kdv iade, danışmanlık"></img></Link>
        </div>
        <div className="menu">
          <ul className="menuUl">
            <li className={navbar ? "menuLi fontColor" : "menuLi"}><Link style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} className="link" to="/Anasayfa">Anasayfa</Link></li>
            <li className={navbar ? "menuLi fontColor" : "menuLi"}><Link style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} className="link" to="/Kurumsal">Kurumsal</Link><KeyboardArrowDownIcon />
              <ul style={{position: "absolute", top: "100px", left: "0", listStyle: "none", textDecoration: "none", backgroundColor: "#fff", borderRadius: "5px", padding: "10px"}}>
                <li style={{margin: "10px 20px", borderBottom: "1px solid #aaa", paddingBottom: "15px", color: "rgba(59, 59, 61, 0.8)"}}><Link style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} className="link" to="/Kurumsal">Hakkımızda</Link></li>
                <li style={{margin: "10px 20px", color: "rgba(59, 59, 61, 0.8)"}}><Link style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} className="link" to="/Ortaklarimiz">Ortaklarımız</Link></li>
              </ul>
            </li>
            <li className={navbar ? "menuLi fontColor" : "menuLi"}><Link style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} className="link" to="/Hizmetler">Hizmetlerimiz</Link></li>
            <li className={navbar ? "menuLi fontColor" : "menuLi"}><Link style={{height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} className="link" to="/Iletisim">İletişim</Link></li>
          </ul>
        </div>
        <div className="contact">
          <ul>
            <li><CallIcon style={{backgroundColor: "#fff", color: "black", borderRadius: "50%", padding: "10px"}} /></li>
            <li>
              <p className={navbar && "fontColor"}>Sabit Hattımız</p>
              <p className={navbar && "fontColor"}>0 554 358 25 38</p>
            </li>
          </ul>
        </div>
        <div className={"hamburger " + (menuOpen && "active")} onClick={() => setMenuOpen(!menuOpen)}>
            <ul className="hambList">
              <span className={navbar ? "hamb bgColor" : "hamb"}></span>
              <span className={navbar ? "hamb bgColor" : "hamb"}></span>
              <span className={navbar ? "hamb bgColor" : "hamb"}></span>
            </ul>
        </div>
        <div className={"menuListList " + (menuOpen && "active")} id="menuList" style={{top: navbar && "70px", height: "calc(100vh - 70px)"}}>
          <ul>
            <li onClick={() => setMenuOpen(false)} className="menu1"><Link to="/Anasayfa">Anasayfa</Link></li>
            <li onClick={() => setMenuOpen(false)} className="menu1"><Link to="/Kurumsal">Kurumsal</Link></li>
            <li onClick={() => setMenuOpen(false)} className="menu1"><Link to="/Ortaklarimiz">Ortaklarımız</Link></li>
            <li onClick={() => setMenuOpen(false)} className="menu1"><Link to="/Hizmetler">Hizmetlerimiz</Link></li>
            <li onClick={() => setMenuOpen(false)} className="menu1"><Link to="/Iletisim">İletişim</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar