import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../Styles/Counter.css';

function Counter(props) {

    const [items, setItems] = useState('empty');

    const addCard = () => {
        setItems(1);
    };

    const delCard = () => {
        setItems(items - 1);
    };

    useEffect(() => {
        if (typeof items === 'string') {
            const cartNumber = document.querySelector('.cart-number');
            cartNumber.classList.toggle('cart-number--colorNone')
        } else {
            const cartNumber = document.querySelector('.cart-number');
            cartNumber.classList.toggle('cart-number--colorActive')
        }
    }, [items])

    return (
        <div>
            <div className='cart-number'>
                {items}
            </div>
            <Link onClick={addCard} id='btn-card-add' to="#" className="card-link">Add Cart</Link>
            <Link onClick={delCard} id='btn-card-del' to="#" className="card-link">Remove Cart</Link>
        </div>
    )
}

export default Counter
