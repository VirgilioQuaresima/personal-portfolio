import './works.css'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

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
        <div className='card'>
            <img src={props.work.picture} alt='' />
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
    }
]

function Works() {



    return (
        < div className='works-page'>
            <h1 className="section-title">Works</h1>
            <div className='schede'>
                <ScrollMenu noPolyfill style={{ width: '100vw', marginLeft: '10px', marginRight: '10px' }} LeftArrow={LeftArrow} RightArrow={RightArrow}>
                    {works_ls.map((row, index) => {
                        return (<Card key={index} work={row} />)
                    })}
                </ScrollMenu>
            </div>
        </div>)
}

export default Works