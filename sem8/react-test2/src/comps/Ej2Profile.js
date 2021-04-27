import './Ej2Profile.css'

function profile(props) {
    return(
        <div className='profile'>
            <div>
                {props.img}
            </div>
            {props.name}
            <p></p>
        </div>
    )
}

export default profile;