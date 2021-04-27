import './Window.css';


function Window(props){

    const closeWin = () => {
        document.querySelector('#winId').style.display = 'none'
    }

    return(
        <div id='winId' className='windowDiv'>
            <div className='win-img'>
                {/* <img src={props.image} className='img'/> */}
                <div className='win-info'>
                    <p> {props.country} </p>
                    <p> {props.description} </p>
                    <button onClick={closeWin} type='button' id='winBtn1'>Close</button>
                </div>
            </div>
            
        </div>
    )
};

export default Window;