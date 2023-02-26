import React from 'react'
import './resume.css'


function MyText() {
    return (
        <>
            <p className='resume'>Hello! I'm Virgilio Quaresima. I'm a <span>phisicisty</span> and a <span>full-stack developer</span> from Italy.</p>
            <p className='resume'>
                I have rich experience in complex physics <span>data analysis</span> & <span>visualization</span>, <span>data enegeneering</span>, <span>ETL pipelines</span>.
            </p>
            <p className='resume'>
                I developed many <span>Web applications</span>, you can find some of these projects on my GitHub profile.
            </p>
        </>
    )
}

function KnownList() {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('CV_Virgilio_Quaresima.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'CV_Virgilio_Quaresima.pdf';
                alink.click();
            })
        })
    }

    return (
        <div className='data-container'>
            <p><span className='higl'>Age:</span> 27</p>
            <p><span className='higl'>Residence:</span> Italy</p>
            <p><span className='higl'>Freelance:</span> Avalaible</p>
            <p><span className='higl'>Address:</span> Girifalco (CZ)</p>
            <p><span className='higl'>Phone:</span> +39 388 17 05 952</p>
            <p><span className='higl'>E-mail:</span> virgilioquaresima.dev@gmail.com</p>
            <button onClick={onButtonClick} className='download-button'> Download CV</button>
        </div>
    )
}

function Resume() {
    return (
        <div className='resume-page'>
            <h1 className="section-title">Resume</h1>
            <div className='resume-container'>
                <MyText />
                <KnownList />
            </div>
        </div>
    )
}
export default Resume