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

    const [cart, setCart] = useState(0);

    const addCard = () => {
        const card1 = 'curso-1-added';
        setCart(card1)

        setItems(items + 1)
    }

    console.log( `esto esta en cart: ${cart} 
    and esto esta en items: ${items}` )

    return (
        <div>
            <div className='cart-number'>
                {items}
            </div>
            <Link onClick={addCard} id='btn-card-add'  className="card-link">Add Cart</Link>
            <Link  id='btn-card-del'  className="card-link">Remove Cart</Link>
        </div>
    )
}

export default Counter
