import "../dos.scss"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState } from "react";

const Dos5 = () => {

    const [state, setState] = useState(false)
  return (
    <div className='dos5 dos'>
        <h1>Vergi ve Revizyon Konusunda Danışmanlık Hizmetlerimiz</h1>
        <p>
            Her türlü sektör ve faaliyet alanında danışmanlık üstlenmiş,
            riskli veya spesifik kabul edilen sorunlara ve sorulara,
        </p>
        <ul>
            <li>Analitik bakış açısı ile</li>
            <li>Güncel bilgiler ışığında</li>
            <li>Vergi ve mali hukuk açısından</li>
        </ul>
        <p>üstün hizmet anlayışı ile çözüm üretmeyi benimsemiştir.</p>
        <p>
            Şirketinizin varlığını, gelişmesini ve devamını tehlikeye
            düşürebilecek yanlış vergi uygulamalarının erken teşhisi ve
            düzeltilmesi vergi incelemesi riskini önemli düzeyde
            azaltılmasının yanında, tespit edilen risklerle ilgili gerekli
            önlemlerin alınması ve riskin yönetilmesi amacıyla, sunmuş olduğumuz bu
            danışmanlık hizmetlerini, Şirketlerin ihtiyacına
            göre,
        </p>
        <ul>
            <li>Spesifik bir konu hakkında</li>
            <li>Herhangi bir özel proje bazında</li>
            <li>İsterseniz sürekli olarak vermekteyiz.</li>
        </ul>
        <p>
            Danışmanlık yaptığımız firmalara bu anlamda şu hizmetleri sağlıyoruz: <span onClick={() => setState(!state)}><ArrowBackIosNewIcon className="arrow"/></span>
        </p>
        <div className={state ? "outCont active" : "outCont"}>
            <div style={{visibility: `${state ? "visible" : "hidden"}`}} className="hiddenCont">
                <ul>
                    <li>Firma faaliyetine uygun muhasebe sistemi kurmak</li>
                    <li>Muhasebe biriminin kendi denetimini ve verimliliğini sağlayacak iç kontrol birimini oluşturmak</li>
                    <li>Muhasebe biriminin yaptığı işlemlerin ve hazırladığı beyanname ve tabloların aylık düzenli denetimini yapmak.</li>
                    <li>Tespit edilen eksik ve noksanlıkların, hatalı uygulamaların mevzuata uygun düzeltilmesini sağlamak</li>
                    <li>Vergi mevzuatında yer alan avantajların kullanılıp kullanılmadığını denetlemek ve bunları uygulatmak</li>
                    <li>Muhasebe kayıtlarından, dönem sonu işlemlere ve mali tabloların hazırlanmasına kadar tüm evrelerde muhasebe birimini denetlemek, yönlendirmek</li>
                    <li>Mali tabloların doğru, mukayese edilebilir şekilde uluslararası standartlara uygun olarak düzenlenmesini sağlamak</li>
                    <li>Çok sık ve hızla değişen mevzuatı, müşavir firma olarak yorumlarımızı da katarak ilgililere zamanında “Vergi Sirküleri” yoluyla duyurmak</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Dos5