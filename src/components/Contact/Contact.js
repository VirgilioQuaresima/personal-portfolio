import './contact.css'
import React from 'react'
function Contact() {
    return (< div className='contact-page'>
        <h1 className="section-title">Contact</h1>
        <form className='contact-form'>
            <div className='form-item'>
                <label>Name: </label><input type="text" />

            </div>
            <div className='form-item'>                   <label>email: </label><input type="text" />        </div>
            <div className='form-item-area'>
                <label>Message: </label><br /><textarea rows="4" style={{width:"80vw"}}/>
            </div>
        </form>
    </div>)
}

export default Contact