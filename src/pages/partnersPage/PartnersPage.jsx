import "./partnersPage.scss"
import plazaPP from "../../assets/plazalar2.jpg"
import profile from "../../assets/enesProfile.jpeg"

const PartnersPage = () => {
  return (
    <div className="partnersPage">
        <div className="imgContB1">
          <img src={plazaPP} alt="Enka, enkaymm, Enka YMM, enka ymm, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi, kdv iade, danışmanlık" />
          <div className='textOff'>
            <h1>Ortaklarımız</h1>
            <h2>Sizlere Hizmet Vermekten Mutluluk Duyuyoruz</h2>
          </div>
        </div>
        <div className="infoCont">
            <div className="info">
                <div className="infoA1">
                    <div className="names">
                      <h1>Enes Karakurt</h1>
                      <h3>Kurucu Ortak, YMM</h3>
                    </div>
                    <div className="cvInfo">
                      <p>1989 yılında Samsunda doğan Enes KARAKURT orta öğrenimini Samsunda tamamladıktan sonra İstanbul Üniversitesi İktisat fakültesi Ekonometri bölümünden 2012 yılında mezun olmuştur. Ondokuzmayıs Üniversite Lisansüstü Eğitim Enstitüsü İktisat Anabilim Dalında yüksek lisans öğrenimine devam etmektedir.</p>
                      <p>Enes KARAKURT Aralık 2012’de gerçekleştirilen Vergi Müfettiş Yardımcılığı giriş sınavında başarılı olarak 2013 yılında mesleğe başlamıştır. 29/3/2019 tarih ve 2019/73 Sayılı Cumhurbaşkanlığı Kararnamesi ile Vergi Müfettişliğine atanan Enes KARAKURT 10 yılı aşkın meslek hayatında özel inşaat işleri, yıllara yaygın inşaat ve onarım işleri, KDV iadeleri, üretim süreçleri (Envanter-Randıman), transfer fiyatlandırması, çokuluslu şirketlerin vergisel işlemleri, birleşme-bölünme-devir gibi konular başta olmak üzere birçok vergisel konuda Vergi İncelemelerinde bulunmuştur.</p>  
                      <p>Son olarak Vergi Denetim Kurulu Vergi İadeleri Denetim Daire Başkanlığında görev yapmaktayken 14.12.2023 tarihi itibariyle görevinden kendi isteği ile ayrılan Enes KARAKURT meslek hayatına Yeminli Mali Müşavir olarak devam etmektedir.</p>
                      <p>Enes KARAKURT evli ve 2 çocuk babasıdır.</p>
                    </div>
                </div>
            </div>
            <div className="infoImg">
                <img src={profile} alt="Enka, enkaymm, Enka YMM, enka ymm, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi, kdv iade, danışmanlık" />
            </div>
        </div>
    </div>
  )
}

export default PartnersPage