import './App.css';
import React from 'react'
import NavBar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import Resume from './components/Resume/Resume';
import { Animator, MoveIn, Fade, ScrollContainer, ScrollPage, batch, FadeIn, ZoomIn, ZoomOut, } from 'react-scroll-motion'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Analytics } from '@vercel/analytics/react';
 
const MoveFromSx = batch(MoveIn(-1000, 0), FadeIn())
const MoveFromDx = batch(MoveIn(1000, 0), FadeIn())
const MoveFromTop = batch(MoveIn(0, -1000), FadeIn())
const MoveFromBtmWithZoom = batch(MoveIn(0, 1000), FadeIn(), ZoomIn())
const MoveFromBtm = batch(MoveIn(0, 1000), FadeIn())
function ContactBar() {
  return (
    <div class="contact-bar">
      <p>e: virgilio.quaresima@starqlab.com</p>
      <p>m: +39 388 1705952</p>
      <p>P.IVA: 03860180797</p>
    </div>
  )
}

function IconsBar() {
  return (
    <div class="icon-bar">
      <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/virgilio-quaresima/" class="icon"><LinkedInIcon /></a>
      <a rel="noopener noreferrer" target="_blank" href="mailto: virgilioquaresima.dev@gmail.com" class="icon"><GoogleIcon /></a>
      <a rel="noopener noreferrer" target="_blank" href="https://github.com/VirgilioQuaresima?tab=repositories" class="icon"><GitHubIcon /></a>
      <label href="#" class="youtube">Follow Me</label>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="home" className='page'>
        <About />
      </div>
      <div id="resume" className='page'>
        <Resume />
      </div>
      <div id="skills" className='page'>
        <Skills />
      </div>
      <div id="works" className='page'>
        <Works />
      </div>
      <div id="contact" className='page'>
        <Contact />
      </div>
      <ContactBar />
      <IconsBar />
      <Analytics />
    </div>
  );
}

export default App;
