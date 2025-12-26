import React from 'react'
import { FaLinkedin,FaGithub,FaInstagram  } from "react-icons/fa";

export function Profile(props) {
  return (
    <div>
        <img src={props.avatar} alt={props.name} />
        <h2>{props.name}</h2>
        <div>{props.bio}</div>
        <div>{props.phone}</div>
        <div>{props.email}</div>
      <div>
            <a href={props.gitHubUrl} target="_black" rel= "noreferer"><FaGithub/> GitHub </a>
            <a href={props.linkedinUrl} target="_black" rel= "noreferer"><FaLinkedin/> Linkedin</a>
            <a href={props.instagramUrl} target="_black" rel= "noreferer"><FaInstagram/> Instagram</a>
        </div>
    </div>
  )
}
