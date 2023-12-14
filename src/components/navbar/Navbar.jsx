import { useState } from "react"
import "./navbar.scss"
import CallIcon from '@mui/icons-material/Call'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {

  const [navbar, setNavbar] = useState(false)

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
        <div className={navbar ? "logo fontColor" : "logo"}>
          <h1 className={navbar && "borderBottom"}>MusEn</h1>
          <p className={navbar && "fontColor"}>Güvenle</p>
        </div>
        <div className="menu">
          <ul className="menuUl">
            <li className={navbar ? "menuLi fontColor" : "menuLi"}>Anasayfa</li>
            <li className={navbar ? "menuLi fontColor" : "menuLi"} style={{display: "flex", position: "relative"}}>Kurumsal<KeyboardArrowDownIcon />
              <ul style={{position: "absolute", top: "100px", left: "0", listStyle: "none", textDecoration: "none", backgroundColor: "#fff", borderRadius: "5px", padding: "10px"}}>
                <li style={{margin: "10px 20px", borderBottom: "1px solid #aaa", paddingBottom: "15px", color: "rgba(59, 59, 61, 0.8)"}}>Hakkımızda</li>
                <li style={{margin: "10px 20px", color: "rgba(59, 59, 61, 0.8)"}}>Ortaklarımız</li>
              </ul>
            </li>
            <li className={navbar ? "menuLi fontColor" : "menuLi"}>Hizmetlerimiz</li>
            <li className={navbar ? "menuLi fontColor" : "menuLi"}>Mevzuat</li>
            <li className={navbar ? "menuLi fontColor" : "menuLi"}>İletişim</li>
          </ul>
        </div>
        <div className="contact">
          <ul>
            <li><CallIcon style={{backgroundColor: "#fff", color: "black", borderRadius: "50%", padding: "10px"}} /></li>
            <li>
              <p className={navbar && "fontColor"}>Sabit Hattımız</p>
              <p className={navbar && "fontColor"}>444 01 01</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar