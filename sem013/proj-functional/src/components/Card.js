import React from 'react'
import { Link } from 'react-router-dom';

import '../Styles/Card.css';

function Card(props) {

    const test = () => {
        console.log('asd');
    }

    return (
        <div className='cards-div'>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card 1</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
                    <Link onClick={test} id='btn-card1-add' to="#" className="card-link">Add Cart</Link>
                    <Link id='btn-card1-del' to="#" className="card-link">Remove Cart</Link>
                </div>
            </div>

            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card 2</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
                    <Link id='btn-card2-add' to="#" className="card-link">Add Cart</Link>
                    <Link id='btn-card2-del' to="#" className="card-link">Remove Cart</Link>
                </div>
            </div>
        </div>
    )
}

export default Card
