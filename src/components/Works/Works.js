import './works.css'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useState } from 'react';
import logo from '../../assets/imgs/2.png'
function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);

    return (
        <button className="arrow-button" disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            <ArrowBackIosNewIcon />
        </button>
    );
}

function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

    return (
        <button className="arrow-button" disabled={isLastItemVisible} onClick={() => scrollNext()}>
            <ArrowForwardIosIcon />
        </button>
    );
}

function Card(props) {
    return (
        <div className='card' onClick={props.click}>
            <h1>{props.work.name}</h1>
            <img src={props.work.picture} alt='' />
            <p>{props.work.role}</p>
            <p style={{textAlign:"center"}}>{props.work.startDate} - {props.work.endDate}</p>
        </div>
    )
}


const works_ls = [
    {
        name: 'CodeRTD',
        picture: 'https://static.wixstatic.com/media/467004_c9798b3f287042b8afb7bafa1aefc0bd~mv2.png/v1/fill/w_211,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CON%2520PUNTI2_edited.png',
        role:'dev',
        startDate:'04/22',
        endDate:'today'
    },
    {
        name: 'Jarvit',
        picture: 'https://www.jarvit.com/wp-content/uploads/2021/01/logo.png',
        role:'dev',
        startDate:'10/21',
        endDate:'03/22'
    },
    {
        name: 'STARQ Lab',
        picture: logo,
        role:'dev',
        startDate:'03/22',
        endDate:'today'
    },
]

function Works() {
    const dictionary={
        'CodeRTD':'tante belle cose',
        'Jarvit':'un cazzo'
    }
    const [actual,setActual] = useState(dictionary['CodeRTD'])

    function setf(e){
        console.log(e)
        setActual(dictionary[e])
    }

    return (
        < div className='works-page'>
            <h1 className="section-title">Works</h1>
            <div className='schede'>
                <ScrollMenu noPolyfill style={{ width: '100vw', marginLeft: '10px', marginRight: '10px' }} LeftArrow={LeftArrow} RightArrow={RightArrow}>

                    {works_ls.map((row, index) => {
                        return (<Card work={row} click={()=>setf(row.name)}/>)
                    })}

                </ScrollMenu>
                <div>
                    <p>
                        Descrizione su quanto fatto a {actual}
                    </p>
                </div>
            </div>
        </div>)
}

export default Works