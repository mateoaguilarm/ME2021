import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../Styles/Counter.css';

function Counter(props) {

    const [items, setItems] = useState(0);

    // const addCard = () => {
    //     setItems(1);
    // };

    // const delCard = () => {
    //     setItems(items - 1);
    // };

    useEffect(() => {
        if (typeof items === 0) {
            const cartNumber = document.querySelector('.cart-number');
            cartNumber.classList.toggle('cart-number--colorNone')
        } else {
            const cartNumber = document.querySelector('.cart-number');
            cartNumber.classList.toggle('cart-number--colorActive')
        }
    }, [items])

    const cartItems = ['asd', '2', '3', '', ''];

    const delCard = () => {
        cartItems.shift()
    }

    useEffect(() => {
        setItems(cartItems.length)
    }, [cartItems.length])

    const myFunction = () => {
        cartItems.push("Kiwi");
        
    }

    console.log(cartItems.length);
    console.log(cartItems);

    return (
        <div>
            <div className='cart-number'>
                {items}
            </div>
            <Link onClick={myFunction} id='btn-card-add' to="#" className="card-link">Add Cart</Link>
            <Link onClick={delCard} id='btn-card-del' to="#" className="card-link">Remove Cart</Link>
        </div>
    )
}

export default Counter
