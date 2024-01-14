import { useState } from 'react';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import "./formPage.scss"
import buildOffical from "../../assets/build17.jpeg"

const FormPage = () => {

  const [btnState, setBtnState] = useState(false)
  const [btnTxt, setBtnTxt] =  useState("Gönder")
  const [icon, setIcon] = useState()
  const [focused, setFocused] = useState(false)

  const [values, setValues] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleClick = (e) => {
    e.preventDefault();

    if(values.phone === "" || values.email ==="") {
      alert("Lütfen istenilen bilgileri doldurunuz!")
    } else {
      setBtnState(true)
      setBtnTxt("Gönderiliyor...")
      setIcon(<HexagonIcon />)
      setTimeout(() => {
        setBtnState(false)
        setBtnTxt("Gönderildi")
        setIcon(<FileDownloadDoneIcon />)
        setValues({
          name: "",
          surname: "",
          email: "",
          phone: "",
          message: ""
        })
      }, 3000);
    }

    

    const formData = new FormData(e.target)
    const payLoad = Object.fromEntries(formData)
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <div className='formPage'>
        <div className="imgContB1">
          <img src={buildOffical} alt="" />
          <div className='textOff'>
            <h1>İletişim</h1>
            <h2>Danışmak istediğiniz sorularınız için aramaktan çekinmeyin</h2>
          </div>
        </div>
        <div className="formCont3">
          <span><AlignVerticalTopIcon /></span>
          <h2>EnKa YMM</h2>
          <h1>İletişim Formu</h1>
          <div className="form">
            <form onSubmit={handleClick}>
              <input onChange={onChange} type="text" name="name" placeholder="Adınız" value={values.name}/>
              <input onChange={onChange} type="text" name="surname" placeholder="Soyadınız" value={values.surname}/>
              <input onChange={onChange} type="email" name="email" placeholder="E-Mail Adresiniz" value={values.email} pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" onBlur={handleFocus} focused={focused.toString()}/>
              <input onChange={onChange} type="tel" name="phone" placeholder="Telefon Numaranız" value={values.phone} pattern="^[0-9]{11}$" onBlur={handleFocus} focused={focused.toString()}/>
              <textarea onChange={onChange} name="message" cols="30" rows="15" placeholder="Mesajınız" value={values.message}></textarea>
              <div className="btnFC">
                <button className={btnState ? "btn-fc3 active" : "btn-fc3"}><span className={btnState && "activeIcon"}>{icon}</span>{btnTxt}</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default FormPage