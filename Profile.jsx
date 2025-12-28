import React from 'react'
import { FaLinkedin,FaGithub,FaInstagram  } from "react-icons/fa";
import styles from './profile.module.css'


export function Profile(props) {
  return (
    <div className={styles.container}>
        <img src={props.avatar} alt={props.name}  className={styles.avatar} />
        <h2 className={styles.name}>{props.name}</h2>
        <div className={styles.info}>{props.bio}</div>
        <div className={styles.info}>{props.phone}</div>
        <div className={styles.info}>{props.email}</div>
      <div>
            <a href={props.gitHubUrl} target="_blank" rel= "noreferer"><FaGithub/> GitHub </a>
            <a href={props.linkedinUrl} target="_blank" rel= "noreferer"><FaLinkedin/> Linkedin</a>
            <a href={props.instagramUrl} target="_blank" rel= "noreferer"><FaInstagram/> Instagram</a>
        </div>
    </div>
  )
}
