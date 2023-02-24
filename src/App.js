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
import { Animator, MoveIn, Fade, ScrollContainer, ScrollPage, batch, FadeIn,} from 'react-scroll-motion'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const MoveFromSx = batch(MoveIn(-1000, 0), FadeIn())
const MoveFromDx = batch(MoveIn(1000, 0), FadeIn())
function App() {
  return (
    <div className="App">
      <NavBar />
      <ScrollContainer>
        <div id="about" className='page'>
          <ScrollPage >
            <Animator animation={Fade()} >

              <About />

            </Animator>
          </ScrollPage>
        </div>
        <div id="skills" className='page'>
          <ScrollPage >
            <Animator animation={MoveFromSx}>

              <Skills />

            </Animator>

          </ScrollPage>
        </div>
        <div id="works" className='page'>
          <ScrollPage >
            <Animator animation={MoveFromDx}>
              <Works />
            </Animator>
          </ScrollPage>
        </div>
      </ScrollContainer>



      <div id="contact" className='page'>
        <Contact />
      </div>
      <div class="contact-bar">
        <p>e: virgilioquaresima.dev@gmail.com</p>
        <p>m: +39 388 1705952</p>
      </div>
      <div class="icon-bar">
        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/virgilio-quaresima/" class="icon"><LinkedInIcon /></a>
        <a rel="noopener noreferrer" target="_blank" href="mailto: virgilioquaresima.dev@gmail.com" class="icon"><GoogleIcon /></a>
        <a rel="noopener noreferrer" target="_blank" href="https://github.com/VirgilioQuaresima?tab=repositories" class="icon"><GitHubIcon /></a>
        <label href="#" class="youtube">Follow Me</label>
      </div>
    </div>
  );
}

export default App;
