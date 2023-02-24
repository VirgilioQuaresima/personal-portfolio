import './about.css'
import Typewriter from 'typewriter-effect'
import React from 'react'
function About() {
    return (
        < div className='page-container'>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 className="saluto">Hi,</h1>
            <span className='motion-text'><label className='IAM'>I am </label><Typewriter
            className="typewr"
            options={{
                autoStart:true,
                loop:true,
                delay:50,
                strings:["a Full-stack developer...","a data engeneer...","a Physicist..."]
            }}
            /></span>
            <div className='bio-container'>
                <span className='bio'>Hello, I' am <span className='higlted-text'>Virgilio Quaresima</span>, Full-stack Developer, Data engeneer and Physicist <p>{'\n'}</p> Based in Girifalco (CZ), Italy.</span>
            </div>
        </div>
    )
}

export default About