import './contact.css'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';


function Contact() {
    const form = useRef();
    const capthaToken=useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        const token = capthaToken.current.getValue(); // prevents the page from reloading when you hit “Send”
        if (token !== '' && form.current.user_name.value !== '' && form.current.user_email.value !== '' && form.current.message.value !== '') {
            capthaToken.current.reset();
            emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
                .then((result) => {
                    console.log(result)
                    alert('messaggio inviato')
                    // show the user a success message
                }, (error) => {
                    // show the user an error
                    console.log(error)
                    alert(error)
                });
        }
        else{
            alert('dati mancanti nel form')
        }


    };


    return (< div className='contact-page'>
        <h1 className="section-title">Contact</h1>
        <form ref={form} className='contact-form'>
            <div className='form-item'>
                <label>Name: </label><input type="text" name='user_name' />

            </div>
            <div className='form-item'>                   <label>email: </label><input type="text" name='user_email' />        </div>
            <div className='form-item-area'>
                <label>Message: </label><br /><textarea rows="4" style={{ width: "80vw" }} name='message' />
            </div>
            <div className='form-item-bottom'>
            <ReCAPTCHA theme='dark' sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY} ref={capthaToken}/>
            <button className='contact-button' href="#" onClick={sendEmail}>Send Message</button>
            </div>

        </form>
    </div>)
}

export default Contact