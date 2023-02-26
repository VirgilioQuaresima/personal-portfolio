import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './navbar.css'
import logo from '../../assets/imgs/2.png'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

function Menu(props){
    return(
    <div className={props.className} hidden={props.hidden}>
        <Nav.Item className='navbar-item'>
            <button onClick={() => props.ScrollTo('home')}>Home</button>
        </Nav.Item>
        <Nav.Item className='navbar-item'>
            <button onClick={() => props.ScrollTo('resume')}>Resume</button>
        </Nav.Item>
        <Nav.Item className='navbar-item'>
            <button onClick={() => props.ScrollTo('skills')}>Skills</button>
        </Nav.Item>
        <Nav.Item className='navbar-item'>
            <button onClick={() => props.ScrollTo('works')}>Works</button>
        </Nav.Item>
        <Nav.Item className='navbar-item'>
            <button onClick={() => props.ScrollTo('contact')}>Contact</button>
        </Nav.Item>
    </div>
    )
}


function NavBar() {
    const [showMenu, setShowMenu] = useState(true)

    function ScrollTo(e) {
        document.getElementById(e).scrollIntoView({
            behavior: 'smooth', // gives an ease-in-out effect to our scroll
        });
        setShowMenu(true)
    }

    function showTolbarMenu() {
        setShowMenu(!showMenu)
    }

    return (<>
        <div className='navbar-sta'>
            <Navbar.Brand className='brand' href="/">
                <img
                    src={logo}
                    className="brand-logo"
                    alt="React Bootstrap logo"
                />
            </Navbar.Brand>
            <div className='navbar-button'>
                <button className='toggle-button' onClick={showTolbarMenu}><MenuIcon style={{

                }} /></button>
            </div>
            <Menu className='navbar-links' ScrollTo={ScrollTo}/>
            <Menu className='tolbar-menu' hidden={showMenu} ScrollTo={ScrollTo}/>
        </div>
        <br />

    </>)
}

export default NavBar