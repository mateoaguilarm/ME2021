import React from 'react'
import './PeticionesCard.css'

function PeticionesCard(props) {
    return (
        <div className='mainDiv'>
            <div className='mainDiv__title'> {props.title} </div>
            <div className='mainDiv__desc'> <h5>Descripcion:</h5> {props.desc} </div>
            <button className='btn'> {props.btn} </button>
        </div>
    )
}

export default PeticionesCard;
