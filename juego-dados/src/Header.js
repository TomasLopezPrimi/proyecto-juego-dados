import React from "react";
import dados1 from './assets/img/dados1.png'
import dados2 from './assets/img/dados2.png'

export default function Header() {
  return(
    <>
      <header className="header">
        <img className="img" src={dados1} alt='Img dado' />
        <h1 className="title">Tenzies</h1>
        <img className="img" src={dados2} alt='Img dado'/>
      </header>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
    </>
)}