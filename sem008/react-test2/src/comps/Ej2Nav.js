import {useEffect} from 'react';
import './Ej2Nav.css';
import Ej2Profile from './Ej2Profile';

function NavPart(props) {

    let nav = null
    console.log(nav);
    let changeColor = () => {
        nav.classList.toggle('mainNav--bg-color');
    }

    useEffect(()=>{
        nav = document.querySelector('#nav1')
    }, [])

    return(
        <div>
            
            <nav id='nav1' className='mainNav'>
                <p></p>
                <Ej2Profile name='Bobby' img={props.img} />
            </nav>
            <button className='btn1' onClick={changeColor}>Change Background</button>
        </div>
    )
}

export default NavPart;