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
                 <a href={props.gitHubUrl}><FaGithub/></a>
            <a href={props.linkedinUrl}><FaLinkedin/></a>
            <a href={props.instagramUrl}><FaInstagram/></a>
        </div>
    </div>
  )
}
