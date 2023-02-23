import React from "react";
import Die from './Die';
import { useState, useEffect } from "react";
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'
import Swal from "sweetalert2";
import Header from './Header'
export default function App() {

    const [tenzies, setTenzies] = useState(false)
    const [rolls, setRolls] = useState(0)


    //Tirar dados 
    const getDice = () => Math.ceil(Math.random() * 6)
    function allNewDice() {
        const newDice = []
        const amountNumbers = 10
        for (let i=0; i < amountNumbers; i++) {
            newDice.push({
                value: getDice(),
                isHeld: false,
                id: nanoid()
            })
        }
        return newDice
    }

    //Estado de los dados
    const [dice, setDice] = useState(allNewDice())

    //Función que cambia si queres retener el dado
    function holdDice(id) {
        setDice(oldDice => oldDice.map((die) =>
            die.id !== id ? die : {
                ...die,
                isHeld: !die.isHeld
            }))

        console.log(diceElements[0].props)
    }

   
    //Mapeo de los dados
    const diceElements = dice.map(die => 
        <Die 
            value={die.value} 
            key={die.id} 
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id) } />)

    //Botón Roll
    function rollDice() {
        setDice(oldDice => oldDice.map((die) =>
            die.isHeld === true ? die : {
                ...die,
                id: nanoid(),
                value: getDice()
            }))
        
        setRolls(prevValue => prevValue += 1)
    }
    
    //Chequear si se ganó con alerta
    const winAlert = () => (Swal.fire({
        title: 'You won!!',
        width: 600,
        padding: '3em',
        color: '#716add',
        showConfirmButton: false,
        timer: 3500
      }))

    useEffect(() => {
        const valueDie = dice[0].value
        if (
            dice.every(die => die.isHeld && die.value === valueDie)
        ) {
            setTenzies(true)
            winAlert()
        }
    }, [dice]);

    //Resetear juego
    function newGame() {
        setDice(allNewDice)
        setTenzies(false)
        setRolls(0)
    }

  return (
    <main>
        {tenzies && (<Confetti />)}
        <Header />
        <div className="dice-container">
              {diceElements}
        </div>
        {!tenzies && (<button className="roll-btm" onClick={rollDice} > Roll </button>)}
        <div className="rolls">
            Rolls: {rolls}
        </div>
        <button className="newgame-btm" onClick={newGame} >New Game </button>
    </main>
  )
}