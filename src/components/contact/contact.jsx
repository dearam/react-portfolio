import React ,{useRef,useState} from 'react'
import "./contact.css"
import Phone from '../../images/phone.png'
import Email from '../../images/email.png'
import Address from '../../images/address.png'
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef()
    const [done,setDone] = useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_8w2ww8f', 'template_ppsdfr5', formRef.current, 'user_ANOg3A3wlIkYILyVv8CFA')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className='c'>
        <div className='c-bg'></div>
        <div className='c-wrapper'>
            <div className='c-left'>
                <h1 className='c-title'>lets discuss your project</h1>
                <div className='c-info'>
                    <div className='c-info-item'>
                        <img className='c-icon'
                            src={Phone}
                            alt=""/>
                        +91 93606 45254
                    </div>
                    <div className='c-info-item'>
                        <img className='c-icon'
                            src={Email}
                            alt=""/>
                        ramprasath2709@gmai.com
                    </div>
                    <div className='c-info-item'>
                        <img className='c-icon'
                            src={Address}
                            alt=""/>
                        Kamarajar salai,Madurai,Tamil Nadu,India
                    </div>
                </div>
            </div>
            <div className='c-right'>
                <p className='c-desc'>
                    <b>what's your story?</b> Get in touch.Always available freelancing
                    if the right project comes along.me
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' name="user_name"/>
                    <input type="text" placeholder='Subject' name="user_subject"/>
                    <input type="text" placeholder='Email' name="user_email"/>
                    <textarea rows="5" placeholder='message' name="message"/>
                    <button>Submit</button>
                    <div className='c-tq'>{done && "ThankYou..!"}</div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default  Contact