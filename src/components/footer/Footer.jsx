import "./footer.scss"
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call'
import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="cont-1 mr">
                <div className="header1">
                    <span style={{display: "flex", justifyContent: "center", alignItems: "center"}}><AlignVerticalTopIcon fontSize="normal" style={{color: "white"}} /></span>
                    <h1>EnKa</h1>
                </div>
                <div className="desc1">
                    <p>
                    Dürüstlük ve güveni ilke edinen şirketimizin amacı; kurumsallaşma yolunda, ulusal ve uluslararası meslek etiğine bağlı, sürekli kendini yenileme ve yaşam boyu öğrenmenin gerekliliğine olan inançla müşterilerimizin ihtiyaçlarına en uygun profesyonel çözümleri zamanında sunmak ve müşterilerimizin çalışmalarına değer katmaktır.
                    </p>
                </div>
            </div>
            <div className="cont-2 mr br">
                <h1 className="hd">Hızlı Erişim</h1>
                <ul className="menu1 mn">
                    <Link className="link" to="/Anasayfa"><li>Anasayfa</li></Link>
                    <Link className="link" to="/Kurumsal"><li>Kurumsal</li></Link>
                    <Link className="link" to="/Hizmetlerimiz"><li>Hizmetlerimiz</li></Link>
                    <Link className="link" to="/Iletisim"><li>İletişim</li></Link>
                </ul>
            </div>
            <div className="cont-3 mr br">
                <h1 className="hd">Hizmetlerimiz</h1>
                <ul className="menu2 mn">
                    <Link className="link" to="/Hizmetler/1"><li>Tam Tasdik</li></Link>
                    <Link className="link" to="/Hizmetler/2"><li>KDV ile ÖTV İadesi ve Mahsup İşlemleri</li></Link>
                    <Link className="link" to="/Hizmetler/3"><li>Vergi Uyuşmazlıkları</li></Link>
                    <Link className="link" to="/Hizmetler/4"><li>Şirketler Hukuku Alanında</li></Link>
                    <Link className="link" to="/Hizmetler/5"><li>Vergi ve Revizyon Konusunda Danışmanlık</li></Link>
                    <Link className="link" to="/Hizmetler/6"><li>Vergi ve Muhasebe Yönetsel Danışmanlık</li></Link>
                    <Link className="link" to="/Hizmetler/7"><li>Diğer Denetim İşlemleri</li></Link>
                    <Link className="link" to="/Hizmetler/8"><li>Diğer Tasdik İşlemleri</li></Link>
                </ul>
            </div>
            <div className="cont-4 mr br">
                <h1 className="hd">Bize Ulaşın</h1>
                <ul className="menu3 mn">
                    <li><span><CallIcon /></span>
                        <div>
                            <p>Sabit Hattımız</p>
                            <p>444 01 01</p>
                        </div>
                    </li>
                    <li><span><EmailIcon /></span>
                        <div>
                            <p>E-Mail Adresimiz</p>
                            <p>info@enkaymm.com</p>
                        </div>
                    </li>
                    <li><span><LocationOnIcon /></span>
                        <div>
                            <p>Ofis Adresimiz</p>
                            <p>Mutlukent Mah. 2038.Sok. Çankaya/ANKARA</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="designer">
            <p><CopyrightIcon fontSize="small" style={{color: "#fff", marginRight: "5px"}} />Furkan Durak<LinkedInIcon fontSize="small" style={{marginLeft: "5px"}} /></p>
        </div>
    </div>
  )
}

export default Footer