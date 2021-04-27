import './Ej1Func.css';
import React, { useState, useEffect } from 'react';

function Ej1Func(props) {
    const ancle1 = document.querySelector('#ancle01');
    const ancle2 = document.querySelector('#ancle02');
    const ancle3 = document.querySelector('#ancle03');


    const [ancle01, setAncle01] = useState();
    const [ancle02, setAncle02] = useState();
    const [ancle03, setAncle03] = useState();

    const mark1 = () => {
        const ancle1 = document.querySelector('#ancle01');
        setAncle01(ancle1.classList.add('ancle-colorActive'));
    }

    const mark2 = () => {
        const ancle2 = document.querySelector('#ancle02');
        setAncle02(ancle2.classList.add('ancle-colorActive'));
    }

    const mark3 = () => {
        const ancle3 = document.querySelector('#ancle03');
        setAncle03(ancle3.classList.add('ancle-colorActive'));
    }

    useEffect(() => {
        const ancle1 = document.querySelector('#ancle01');
        const ancle2 = document.querySelector('#ancle02');
        const ancle3 = document.querySelector('#ancle03');
        setTimeout(() => {
            setAncle01(ancle1.classList.add('ancle-colorNone'))
            setAncle02(ancle2.classList.add('ancle-colorNone'))
            setAncle03(ancle3.classList.add('ancle-colorNone'))
        }, 1500);
    }, []);

    // useEffect(() => {
    //     const ancle1 = document.querySelector('#ancle01');
    //     const ancle2 = document.querySelector('#ancle02');
    //     const ancle3 = document.querySelector('#ancle03');
    //     if (ancle1 == true) {
    //         console.log('hola')
    //     } else {
    //         console.log('no sir')
    //     }
    
    //     if (ancle2 == onclick) {
    //         console.log('hola2')
    //     } else {
    //         console.log('no sir2')
    //     }
    // }, [ancle1])

    const classActive01 = ancle1.classList.contains('ancle-colorActive');

    if (classActive01 == true) {
        alert('esta activo')
    } else {
        alert('no')
    }
    

    return (
        <div className='main__div'>
            <h3> </h3>
            <div className='div__tabs'>
                <button onClick={mark1} id='ancle01' className='ancle-tab'> Part One </button>
                <button onClick={mark2} id='ancle02' className='ancle-tab'> Part Two </button>
                <button onClick={mark3} id='ancle03' className='ancle-tab'> Part Three </button>
            </div>
        </div>
    )
}

export default Ej1Func;