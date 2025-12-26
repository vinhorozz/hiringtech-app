import React from 'react'
import {FaHome,FaUserFriends,FaEnvelope} from 'react-icons/fa'
import Styles from './header.module.css'

export function Header() {
  return (
    <header className={Styles.header}>
        <h1 className={Styles.title}>Title</h1>
        <nav className={Styles.nav}>
            <a href="#home"className={Styles.navItem}><FaHome/>Home</a>
            <a href="#about"className={Styles.navItem}><FaUserFriends/>Sobre</a>
            <a href="#contact"className={Styles.navItem}><FaEnvelope/>Contato</a>
        </nav>
    </header>
  )
}

 