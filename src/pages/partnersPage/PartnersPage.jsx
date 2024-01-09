import "./partnersPage.scss"
import plazaPP from "../../assets/plazalar2.jpg"
import profile from "../../assets/enesProfile.jpeg"

const PartnersPage = () => {
  return (
    <div className="partnersPage">
        <div className="imgContB1">
          <img src={plazaPP} alt="" />
          <div className='textOff'>
            <h1>Ortaklarımız</h1>
            <h2>Sizlere Hizmet Vermekten Mutluluk Duyuyoruz</h2>
          </div>
        </div>
        <div className="infoCont">
            <div className="info">
                <div className="infoA1">
                    <h1>Enes Karakurt</h1>
                    <h3>Kurucu Ortak, YMM, Bağımsız Denetçi</h3>
                </div>
            </div>
            <div className="infoImg">
                <img src={profile} alt="" />
            </div>
        </div>
    </div>
  )
}

export default PartnersPage