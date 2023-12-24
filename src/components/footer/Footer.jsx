import "./footer.scss"
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call'
import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="cont-1 mr">
                <div className="header1">
                    <span><AlignVerticalTopIcon fontSize="normal" style={{color: "white"}} /></span>
                    <h1>MusEn</h1>
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
                    <li>Anasayfa</li>
                    <li>Kurumsal</li>
                    <li>Hizmetlerimiz</li>
                    <li>Mevzuat</li>
                    <li>İletişim</li>
                </ul>
            </div>
            <div className="cont-3 mr br">
                <h1 className="hd">Hizmetlerimiz</h1>
                <ul className="menu2 mn">
                    <li>Tam Tasdik</li>
                    <li>KDV ile ÖTV İadesi ve Mahsup İşlemleri</li>
                    <li>Vergi Uyuşmazlıkları</li>
                    <li>Şirketler Hukuku Alanında</li>
                    <li>Vergi ve Revizyon Konusunda Danışmanlık</li>
                    <li>Vergi ve Muhasebe Yönetsel Danışmanlık</li>
                    <li>Yönetsel Danışmanlık</li>
                    <li>Diğer Denetim İşlemleri</li>
                    <li>Diğer Tasdik İşlemleri</li>
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
                            <p>aytinis@gmail.com</p>
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