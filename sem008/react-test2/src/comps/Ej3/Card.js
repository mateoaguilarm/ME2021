
import './Card.css';
import Window from './Window';

function Card(props) {

    const openWin = () => {
        document.querySelector('#winId').style.display = 'block'
    }

    return(
        <div className='mainDivCard'>
            <div className='cardBody'>
                <div className='card-img'>
                    <img src={props.image} className='img'/>
                </div>
                <div className='card-info'>
                    <p> {props.country} </p>
                    <p> {props.description} </p>
                    <button onClick={openWin} type='button' id='btn1'>More Info</button>
                </div>
            </div>
            <div className='mainDivInfo'>
                <Window image={props.image} country={props.country} description={props.description} />
            </div>
        </div>
    )
};

export default Card;