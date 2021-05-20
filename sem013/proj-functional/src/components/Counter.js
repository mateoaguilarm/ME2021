import React, { useState, useEffect } from 'react'

import '../Styles/Counter.css';

function Counter(props) {

    const [items, setItems] = useState('cart empty')

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
        </div>
    )
}

export default Counter
