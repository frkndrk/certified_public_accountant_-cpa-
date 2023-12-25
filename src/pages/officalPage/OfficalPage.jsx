import "./officalPage.scss"
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';


const OfficalPage = () => {
  return (
    <div className='officalPage'>
        <div className="imgContB1">
          <img src="../../src/assets/plaza3.webp" alt="" />
          <div className='textOff'>
            <h1>Kurumsal</h1>
            <h2>Sizlere Hizmet Vermekten Mutluluk Duyuyoruz</h2>
          </div>
        </div>
        <div className="officalCont">
          <div className="contHeader">
            <span><AlignVerticalTopIcon fontSize="small"/></span>
            <h2>MusEn YMM</h2>
            <h1>Hakkımızda</h1>
            <p>Butik hizmet anlayışını, kurumsal yapımızla birleştirip, meslek etiğine bağlı kalarak bilgi birikimimiz ve tecrübelerimiz ışığında, yerli ve yabancı, bireysel ve kurumsal tüm müşterilerimizin sorunlarına sağlıklı ve pozitif çözüm önerileri ile yaklaşarak, güncel bilgilerle hızlı, güvenilir ve eksiksiz en üst kalitede mali danışmanlık hizmetleri sunmak öncelikli hedefimizdir.</p>
            <p>Bu amaçla Müşavirliğimizde, vergi ve denetim alanında tüm müşterilerimizin istek ve ihtiyaçları ile doğrudan alakadar olup, üst düzey bir ilgiyle profesyonel ve güvenilir butik hizmet sunmaktayız.</p>
          </div>
          <div className="contImgB1">
            <img src="../../src/assets/handShake5.jpg" alt="" />
          </div>
        </div>
        <div className="contB1">
          <img className="contB11" src="../../src/assets/hexagon.png" alt="" />
          <div className="contB1A">
            <div className="contB1A1">
              <img src="../../src/assets/hands.jpg" alt="" />
            </div>
            <div className="contB1A2">
              <h4 className="contB1A21">MusEn YMM</h4>
              <h1 className="contB1A22">MUSEN YMM ve Danışmanlık A.Ş Olarak Sizlerle Büyümeye Devam Ediyoruz</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OfficalPage