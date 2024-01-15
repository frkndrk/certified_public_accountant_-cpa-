import "./officalPage.scss"
import buildOffical2 from "../../assets/build8.jpeg"
import hexagon from "../../assets/hexagon.png"
import hands from "../../assets/hands.jpg"
import plaza from "../../assets/plaza3.webp"
import logoBlack from "../../assets/logoBlack.png"


const OfficalPage = () => {
  return (
    <div className='officalPage'>
        <div className="imgContB1">
          <img src={plaza} alt="Enka, enkaymm, Enka YMM, enka ymm, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi, kdv iade, danışmanlık" />
          <div className='textOff'>
            <h1>Kurumsal</h1>
            <h2>Sizlere Hizmet Vermekten Mutluluk Duyuyoruz</h2>
          </div>
        </div>
        <div className="officalCont">
          <div className="contHeader">
            <div className="logoCont">
              <img className="logo" src={logoBlack} alt="Enka, enkaymm, Enka YMM, enka ymm, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi, kdv iade, danışmanlık"></img>
            </div>
            <h1>Hakkımızda</h1>
            <p>EnKa Yeminli Mali Müşavirlik hizmetlerinden Bağımsız Denetime, Muhasebe hizmetlerinden Mali Müşavirliğe, Sosyal Güvenlik Danışmanlığı hizmetlerinden Mesleki Eğitime kadar, geniş bir yelpazede müşterilerine hizmet vermektedir.</p>
            <p>Enka dürüstlüğü, güvenirliliği, ulaşılabilirliği ve dinamizmi ilke edinerek müşterilerimize ve paydaşlarımıza hizmet vermeyi , sunmuş olduğu hizmetlerin kalitesinde evrensel düzeyi yakalamayı amaç olarak belirlemiştir. Bu kapsamda genç, dinamik , vizyoner ve uzman kadrolarımız ile müşteri ve paydaşlarımızın ticari hayatlarına katma değer yaratarak hizmet vermeyi hedeflemektedir.</p>
            <p>EnKa enerji, inşaat, finans, turizm, medya, yazılım, e-ticaret, sağlık, ulaştırma, gıda, otomotiv, tekstil, teknoloji, kamu özel altyapı projeleri başta olmak üzere, farklı sektör ve ölçekte çok sayıda lider şirketin ihtiyaçlarına uygun hizmetler üreten çözüm ortağıdır.</p>
          </div>
          {/* <div className="contImgB1">
            <img src={buildOffical2} alt="Enka, enkaymm, Enka YMM, enka ymm, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi, kdv iade, danışmanlık" />
          </div> */}
        </div>
        <div className="contB1">
          <img className="contB11" src={hexagon} alt="Enka, enkaymm, Enka YMM, enka ymm, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi, kdv iade, danışmanlık" />
          <div className="contB1A">
            <div className="contB1A1">
              <img src={hands} alt="Enka, enkaymm, Enka YMM, enka ymm, Enka Ymm, enes karakurt, Enes Karakurt, Enes Karakurt YMM, Enes Karakurt Ymm, Enes Karakurt Yeminli Mali Müşavir, ymm, YMM, Ymm, Yeminli, Mali, Müşavir, Yeminli Mali Müşavir, Musavir, Ankara Ymm, Ankara Yeminli Mali Müşavir, Ankara enka, ankara enka, Ankara Enka, Tasdik, Denetim, İade, iade, vergi incelemesi , vergi danışmanlığı, Vergi, vergi iadesi, kdv iade, danışmanlık" />
            </div>
            <div className="contB1A2">
              <h4 className="contB1A21">EnKa YMM</h4>
              <h1 className="contB1A22">ENKA YMM Olarak Sizlerle Büyümeye Devam Ediyoruz</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OfficalPage