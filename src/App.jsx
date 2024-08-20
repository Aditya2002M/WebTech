
import NavBar from './Components/NavBar'
import './App.css'
import LandingPage from './Components/LangingPage'
import About from './Components/About'
import Services from './Components/Services'
import News from './Components/News'
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'

function App() {

    useEffect(() => {
        const footerSections = document.querySelectorAll('.footer-column, .newsletter, .footer-bottom');

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            footerSections.forEach(section => {
                const elementTop = section.getBoundingClientRect().top;
                const isVisible = elementTop < windowHeight - 100; 
                if (isVisible) {
                    section.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); 

        return () => window.removeEventListener('scroll', revealOnScroll);
    }, []);

    return (
        <>
        <div className='bg-[#dbeafe]'>
            <NavBar /> 
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                {/* <Route path='/hospital-list' element={<HospitalList />} /> */}
                <Route path='/news' element={<News />} />
            </Routes>
        </div>
       
        </>
    );
}

export default App;
