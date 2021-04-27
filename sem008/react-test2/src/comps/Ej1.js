import './Ej1.css';

function Div1(props) {
    return(
        <div className='main'>
            <div className='main-div1'>
                <ul>
                    <li className='priLi'>Name</li>
                    <li>{props.name}</li>
                    <li className='priLi'>Gender</li>
                    <li>{props.gender}</li>
                    <li className='priLi'>Born</li>
                    <li>{props.born}</li>
                    <li className='priLi'>House</li>
                    <li>{props.house}</li>
                    <li className='priLi'>Description</li>
                    <li>{props.description}</li>
                </ul>
            </div>
        </div>
    )
}

export default Div1;