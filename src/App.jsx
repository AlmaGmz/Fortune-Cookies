import { useState } from 'react'
import prhases from './prhases.json'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import {bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14} from './assets/images'
import './App.css'


const images =[bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, bg13, bg14]

function getRandomIndex (arr) {
  return Math.floor(Math.random() * arr.length)
}

function App() {
  const [phrase, setPhrase] = useState(prhases[getRandomIndex(prhases)].phrase)
  const [bgRandom, setBgRandom] = useState (images[getRandomIndex(images)])
  const handleClick = () =>{
    setPhrase(prhases[getRandomIndex(prhases)].phrase)
    setBgRandom(images[getRandomIndex(images)])
  }

  const bgStyle = `url('${bgRandom}')`
  

  return (
    <div className= 'wrapped'style= {{backgroundImage: bgStyle}}>
      <div className="container">
      <h1 className='name'>Galletas de la Fortuna</h1>
      <blockquote className='card'>
        <div className='card__body'>
        <p className ='card__text'>
        <RiDoubleQuotesL className='card__quote' />
        {' '}{phrase}{' '}
        <RiDoubleQuotesR className='card__quote'/></p>
        </div>
      </blockquote>
       
       <button className='btn'onClick={handleClick}>Ver otra</button>
       </div> 
    </div>
  )
}

export default App
