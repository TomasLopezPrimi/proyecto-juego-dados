import React from "react"

export default function Die(props) {
    const stylesCont = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    const stylesImg = {
        opacity: props.isHeld ? "0.6" : "1"
    }
    const numero = JSON.stringify(props.value)

    return (
        <div className='die-face' style={stylesCont} onClick={props.holdDice} >
            <img 
                className="die-num" 
                src={`./numero${numero}.png`}
                style={stylesImg}
                alt={'dado' + numero} />
        </div>
    )
}