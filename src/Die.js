import React from "react"
import Numero1 from './assets/img/numero1.png'
import Numero2 from './assets/img/numero2.png'
import Numero3 from './assets/img/numero3.png'
import Numero4 from './assets/img/numero4.png'
import Numero5 from './assets/img/numero5.png'
import Numero6 from './assets/img/numero6.png'

export default function Die(props) {
    const stylesCont = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    const stylesImg = {
        opacity: props.isHeld ? "0.6" : "1"
    }
    const numero = JSON.stringify(props.value)

    const imgNum = 
        numero === '1' ? Numero1 :
        numero === '2' ? Numero2 :
        numero === '3' ? Numero3 :
        numero === '4' ? Numero4 :
        numero === '5' ? Numero5 :
        Numero6 

    return (
        <div className='die-face' style={stylesCont} onClick={props.holdDice} >
            <img 
                className="die-num" 
                // src={`./assets/img/numero${numero}.png`}
                src={imgNum}
                style={stylesImg}
                alt={'dado' + numero} />
        </div>
    )
}