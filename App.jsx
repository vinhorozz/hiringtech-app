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
        name="cami" 
        bio="developer" 
        phone="5599999997" 
        email="cami@gmail.com" 
        linkedinUrl="https://www.linkedin.com/" 
        gitHubUrl="https://github.com/" 
        instagramUrl="https://www.instagram.com/"/>             
        
      </div>
      <Footer/>
    </>

  )
}
export default App
