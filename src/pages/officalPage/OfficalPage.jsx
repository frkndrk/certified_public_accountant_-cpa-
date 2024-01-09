import "./officalPage.scss"
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import buildOffical from "../../assets/build17.jpeg"
import buildOffical2 from "../../assets/build8.jpeg"
import hexagon from "../../assets/hexagon.png"
import hands from "../../assets/hands.jpg"


const OfficalPage = () => {
  return (
    <div className='officalPage'>
        <div className="imgContB1">
          <img src={buildOffical} alt="" />
          <div className='textOff'>
            <h1>Kurumsal</h1>
            <h2>Sizlere Hizmet Vermekten Mutluluk Duyuyoruz</h2>
          </div>
        </div>
        <div className="officalCont">
          <div className="contHeader">
            <span><AlignVerticalTopIcon fontSize="small"/></span>
            <h2>EnKa YMM</h2>
            <h1>Hakkımızda</h1>
            <p>Butik hizmet anlayışını, kurumsal yapımızla birleştirip, meslek etiğine bağlı kalarak bilgi birikimimiz ve tecrübelerimiz ışığında, yerli ve yabancı, bireysel ve kurumsal tüm müşterilerimizin sorunlarına sağlıklı ve pozitif çözüm önerileri ile yaklaşarak, güncel bilgilerle hızlı, güvenilir ve eksiksiz en üst kalitede mali danışmanlık hizmetleri sunmak öncelikli hedefimizdir.</p>
            <p>Bu amaçla Müşavirliğimizde, vergi ve denetim alanında tüm müşterilerimizin istek ve ihtiyaçları ile doğrudan alakadar olup, üst düzey bir ilgiyle profesyonel ve güvenilir butik hizmet sunmaktayız.</p>
          </div>
          <div className="contImgB1">
            <img src={buildOffical2} alt="" />
          </div>
        </div>
        <div className="contB1">
          <img className="contB11" src={hexagon} alt="" />
          <div className="contB1A">
            <div className="contB1A1">
              <img src={hands} alt="" />
            </div>
            <div className="contB1A2">
              <h4 className="contB1A21">EnKa YMM</h4>
              <h1 className="contB1A22">ENKA YMM ve Danışmanlık A.Ş Olarak Sizlerle Büyümeye Devam Ediyoruz</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OfficalPage