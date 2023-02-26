import './skills.css'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
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
        <div style={{ marginLeft: '10px', marginRight: '10px',minWidth:"200px" }}>
            <CircularProgressbar text={props.percentage + ' %'} styles={buildStyles({ trailColor: 'rgba(243, 243, 243, 0.565)', pathColor: `#0048BA` })} value={props.percentage} />
            <p className="legend" style={{color:"white",marginTop:"15px"}}>{props.name}</p>
        </div>
    )
}

const skills_ls = [
    { name: 'Python', percentage: 90 },
    { name: 'NodeJS', percentage: 80 },
    { name: 'ReactJS', percentage: 85 },
    { name: 'MySQL', percentage: 80 },
    { name: 'MongoDB', percentage: 70 },
    { name: 'Docker', percentage: 80 },
    { name: 'PySpark', percentage: 80 },
    { name: 'SnowFlake', percentage: 60 },
    { name: 'RabbitMQ', percentage: 60 },
    { name: 'AirFlow', percentage: 70 },
    { name: 'MsOffice', percentage: 90 },
]

function Skills() {
    return (
        < div className='skills-page'>
            <h1 className="section-title">Skills</h1>
            <div className='scroll-container'>
                <ScrollMenu noPolyfill style={{overflow: "hidden",width: '80vw', marginLeft: '10px', marginRight: '10px' }} LeftArrow={LeftArrow} RightArrow={RightArrow}>
                    
                    {skills_ls.map((row,index)=>{
                        return(
                            <Card key={index} name={row.name} percentage={row.percentage} />
                        )
                    })}

                    
                </ScrollMenu>
            </div>

        </div>)
}

export default Skills