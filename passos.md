Criaremos o "componente" "Profile" que apresentará um card com as informações!

Criaremos uma pasta dentro de "components" com o nome "profile" e dentro dele um arquivo "Profile.jsx", esse arquivo receberá as informações via "props" e a relação será: nome, profissão, telefone e e-mail, além de "github" e "linkedin", e teremos o "avatar" que será uma imagem! Todas essas informações serão passadas à estrutura, através de "tags html" com contem uma "propriedade" específica do "objeto" "props", sendo que essas "propriedades" devem ser adicionadas dentro de "chaves" pois se trata de código "JS", usaremos tags semânticas, quando possível e "div"

```JSX
import React from 'react'

export function Profile(props) {
  return (
    <div>
        <img src={props.avatar} alt={props.name} />
        <h2>{props.name}</h2>
        <div>{props.bio}</div>
        <div>{props.phone}</div>
        <div>{props.email}</div>
    </div>
  )
}
```
 criaremos uma "div" especial para comportar os links e botões que terão sua coloração alterada de acordo com uma variável que indicará o sexo do profissional:
```JSX
import React from 'react'

export function Profile(props) {
  return (
    <div>
        <img src={props.avatar} alt={props.name} />
        <h2>{props.name}</h2>
        <div>{props.bio}</div>
        <div>{props.phone}</div>
        <div>{props.email}</div>
     <div>
            <a href={props.gitHubUrl}></a>
            <a href={props.linkedinUrl}></a>
            <a href={props.instagramUrl}></a>
        </div>


    </div>
  )
}
```
 Faremos a importação nomeada do "componente Profile" para o "componente App", e ao adicionarmos o componete dentro da "div App" poderemos definir as "props" que serão passadas ao "componente"


```jsx
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
        avatar="" 
        name="" 
        bio="" 
        phone="" 
        email="" 
        linkedinUrl="https://www.linkedin.com/in/" 
        githubUrl="https://github.com/" 
        instagramUrl="https://www.instagram.com/"/>              
      </div>
      <Footer/>
    </>

  )
}
export default App

```

A imagem do "avatar" será uma das que temos no arquivo guia do projeto, e ainda poderemos incluir os links padrão de cada uma das redes sociais. Também poderemos adicionar ícones disponíveis na página React-icons, através da "dependência" react-icons já adicionada, anteriormente. Adicionaremos os ícones dentro de um importação nomeada no arquivo que cria o componente "Profile":   
````jsx
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
            <a href={props.gitHubUrl}>{FaGithub}</a>
            <a href={props.linkedinUrl}>{FaLinkedin}</a>
            <a href={props.instagramUrl}>{FaInstagram}</a>
        </div>
    </div>
  )
}

```

