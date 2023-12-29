import { useState } from "react";
import "./dos.scss"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Dos3 = () => {

    const [state, setState] = useState(false)

  return (
    <div className='dos3 dos'>
        <h1>Vergi Uyuşmazlıkları</h1>
        <p>
            Vergi Uyuşmazlığı Hizmetimizde, herhangi bir
            nedenle doğrudan veya dolaylı bir şekilde vergi
            incelemesine alınmış mükelleflerin inceleme
            sürecine yönelik vermekteyiz.
        </p>
        <p>
            Vergi Mevzuatında açık olmayan (vergicilerin
            ifadesiyle) birçok gri alan bulunmaktadır.
        </p>
        <p>
            Bunlar uygulamada mükellef ile vergi idaresi
            arasında farklı görüşlere neden olmakta ve
            ihtilaf doğmasına sebep olmaktadır.
        </p>
        <p>
            İhtilafın firma yararına olacak en doğru çözümü
            bulmak belli bir bilgi birikimi ve tecrübe ile
            mümkündür.
        </p>
        <p>
            Uzman kadromuz mükellefi dinleyerek ve
            birlikte çalışarak size en doğru çözümü
            sunacaktır.
        </p>
        <p>
            Sektörde uzun yıllar yaşadığımız inceleme tecrübemizi 
            ve bilgimizi, YMM olarak siz değerli müşterilerimize sunmaktayız.
        </p>
        <p>
            Müşavir firma olarak asıl görevimiz, uyuşmazlığın doğmasını
            önlemektir.
        </p>
        <p>
            Bunun için gerekli tüm tedbirleri almak, yönlendirici ve yol
            gösterici olmak ve özellik arz eden hususlarda gerekli
            hassasiyetleri göstermek temel yaklaşımımız olacaktır.
        </p>
        <p>
            Bu çabalarımıza rağmen doğacak uyuşmazlıklarda aşağıdaki
            hizmetleri sunuyoruz: <span onClick={() => setState(!state)}><ArrowBackIosNewIcon className="arrow"/></span>
        </p>
        <div className={state ? "outCont active" : "outCont"}>
            <div style={{visibility: `${state ? "visible" : "hidden"}`}} className="hiddenCont">
                <h2>Vergi Uyuşmazlıkları Hizmetimiz</h2>
                <ul>
                    <li>Vergi incelemeleri sırasında mükellef ile birlikte hareket etmek, her türlü bilgi, belge ve dökümlerin hazırlanması desteğini sunmak</li>
                    <li>İncelemeye ilişkin işe başlama tutanağından nihai tutanağın alınması ve nihayetinde uzlaşma süreci sonuna kadar stratejik her türlü konularda mükellefleri yönlendirmek, bilgilendirmek, yol haritaları hazırlamak</li>
                    <li>Mükelleflerin hak ve hukuklarını gözetecek her türlü önlem ve tedbirleri almak</li>
                    <li>İfadelerin mükelleflerin geleceğine dair oluşturabileceği risklerin ortadan kaldırılmasına dair danışmanlık hizmetlerini titizlikle yürütmek</li>
                    <li>Tutanakların gözden geçirilmesi</li>
                    <li>Vergi incelemeleri sonrasında bulguların analizi</li>
                    <li>Uzlaşma veya dava açma kararının alınabilmesine yardımcı olacak teknik değerlendirme raporu</li>
                    <li>Tarhiyat öncesi veya sonrası uzlaşma kararının alınması</li>
                    <li>Uzlaşmalara fiilen katılmak, en iyi sonuçla uzlaşma sağlamak için destek sunmak</li>
                    <li>Dava konusu edilen konularda, dava dilekçelerine esas argümanların belirlenmesi</li>
                    <li>Şirket verilerinden hareketle dilekçe eklerinin, dilekçede kullanılabilecek rakamsal çalışmalar yapılarak, mahkemede teknik hususların izahını yapmak</li>
                    <li>İhtiyaç duyulan konularda (Resmi Kurumlara sunmak için) görüş hazırlamak ve sunmak</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Dos3