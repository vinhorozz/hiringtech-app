import { Footer } from "./components/footer/Footer"
import {Header} from "./components/header/Header"
import { Profile } from "./components/profile/Profile"

import './global.css'

function App() {
  return (
    <>
      <Header/>
      <div className="app">
        <Profile 
        avatar="https://randomuser.me/api/portraits/women/44.jpg" 
        name="Toshiko Yamamura" 
        bio="developer" 
        phone="+55(11)99999-9997" 
        email="yamamurato@gmail.com" 
        linkedinUrl="https://www.linkedin.com/" 
        gitHubUrl="https://github.com/" 
        instagramUrl="https://www.instagram.com/"
      
        />      
        <Profile 
        avatar="https://randomuser.me/api/portraits/men/32.jpg" 
        name="Hans Van Diehen" 
        bio="developer" 
        phone="+6(199)767-8907" 
        email="vanhans@gmail.com" 
        linkedinUrl="https://www.linkedin.com/" 
        gitHubUrl="https://github.com/" 
        instagramUrl="https://www.instagram.com/"

        />      
        <Profile 
        avatar="https://randomuser.me/api/portraits/women/55.jpg" 
        name="Rute Ignacia Almodovar" 
        bio="developer" 
        phone="+32(23)999-9997" 
        email="almorute@gmail.com" 
        linkedinUrl="https://www.linkedin.com/" 
        gitHubUrl="https://github.com/" 
        instagramUrl="https://www.instagram.com/"

        />      
        <Profile 
        avatar="https://randomuser.me/api/portraits/men/65.jpg" 
        name="Cadin Manudra" 
        bio="developer" 
        phone="+1(568)879-6767" 
        email="js@gmail.com" 
        linkedinUrl="https://www.linkedin.com/" 
        gitHubUrl="https://github.com/" 
        instagramUrl="https://www.instagram.com/"

        />      
        <Profile 
        avatar="https://randomuser.me/api/portraits/men/60.jpg" 
        name="Camilo Antunes" 
        bio="developer" 
        phone="+55(11) 99765-9997" 
        email="cami@gmail.com" 
        linkedinUrl="https://www.linkedin.com/" 
        gitHubUrl="https://github.com/" 
        instagramUrl="https://www.instagram.com/"

        />             
        
      </div>
      <Footer/>
    </>

  )
}
export default App




