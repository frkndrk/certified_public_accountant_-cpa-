import { useState } from "react"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "../dos.scss"

const Dos6 = () => {
    const [state, setState] = useState(false)

  return (
    <div className='dos6 dos'>
        <h1>Vergi ve Muhasebe Yönetsel Danışmanlık</h1>
        <p>
            Yönetsel Danışmanlık Hizmetimiz, riskli veya
            spesifik kabul edilen sorunların çözümünde ve
        </p>
        <ul>
            <li>Mali tabloların uyumu</li>
            <li>Kredibiliteye uygun hale getirilmesi</li>
            <li>Hukuki görüş verilmesi</li>
            <li>Yurtiçi yatırım fırsatları ve stratejilerinin belirlenmesi</li>
            <li>Vergi planlamaları da dahil olmak üzere</li>
        </ul>
        <p>
            Her türlü konularda sizlere yardımcı olabileceği gibi, bazı
            kararlar almanızda önemli destekler de sağlamaktadır.
        </p>
        <p>
            Hızlı ve doğru bilgi üretmek firmaların karar alma sürecini de
            hızlandırmakta ve bunu başarabilen firmalar diğerlerine karşı
            avantajlı duruma geçmektedir.
        </p>
        <p>
            Şirketlerin yeniden yapılandırılarak Yönetim Kurulunun ön
            göreceği hukuki sisteme oturtulması ve Kurumlaşmaya yönelik
            olarak,
        </p>
        <p>
            Müşavirliğimiz hali hazırda farklı sektör ve faaliyetlerde
            bulunan belli hacimdeki önemli şirketler ile gerçek kişilere
            ve proje bazlı önemli bir sayıdaki müşteriye denetim ve
            danışmanlık hizmeti sunmaktadır.
        </p>
        <p>
            Danışmanlık yaptığımız firmalara bu anlamda şu hizmetleri
            sağlıyoruz: <span onClick={() => setState(!state)}><ArrowBackIosNewIcon className="arrow"/></span>
        </p>
        
        <div className={state ? "outCont active" : "outCont"}>
            <div style={{visibility: `${state ? "visible" : "hidden"}`}} className="hiddenCont">
                <h3>Vergi ve Muhasebe Yönetsel Danışmanlık Hizmetlerimiz</h3>
                <ul>
                    <li>Vergi hukuku ve vergi planlamasına yönelik danışmanlık hizmetleri</li>
                    <li>Dış Ticaret ve Kambiyo mevzuatına ilişkin danışmanlık hizmeti</li>
                    <li>Yabancı sermayeli şirketlere yönelik mali danışmanlık hizmeti</li>
                    <li>Uluslararası vergi anlaşmaları çerçevesinde şirketlerin yönlendirilmesi</li>
                    <li>Revizyon hizmetleri</li>
                </ul>
                <h3>Yönetsel Danışmanlık Hizmetlerimiz</h3>
                <ul>
                    <li>Şirket organizasyonu ve reorganizasyonu</li>
                    <li>İşletmelerde özel amaçlı denetimler sonucu sorunların tespiti ve çözüm önerilerinin geliştirilmesi</li>
                    <li>Muhasebe sisteminde iş ve belge akış düzeninin oluşturulması</li>
                    <li>İç kontrol sistemlerinin kurulması</li>
                    <li>Yönetsel raporlama tekniklerinin işletmelerde hayata geçirilmesi işlemleri</li>
                    <li>Mali yapı ve karlılık analizleri ile kurumsal yönetim ilkelerinin hayata geçirilmesine yönelik denetim ve danışmalık hizmetleri</li>
                    <li>Yatırım ve proje geliştirme hizmetleri</li>
                    <li>Türkiye’de çalışan yabancı personele ilişkin yönlendirmeler</li>
                    <li>Sermaye Piyasası, Enerji Piyasası Üst Kurulu ve Bankacılık Düzenleme ve Denetleme Üst Kurulu Mevzuatı çerçevesinde yönlendirmeler yapmak</li>
                    <li>Vergisel teşvikler, İstisna ve Muafiyet Hizmetleri</li>
                    <li>Serbest Bölgeler Uygulama Hizmetleri</li>
                    <li>Teknoparklar ve Ar-Ge İndirimleri Danışmanlığı</li>
                    <li>Yatırım Teşvik Mevzuatı Danışmanlığı</li>         
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Dos6