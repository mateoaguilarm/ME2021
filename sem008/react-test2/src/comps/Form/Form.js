import './Form.css';

function Form(props) {
    return(
        <div className='formDiv'>
            <form>
                <input placeholder='Name' />
                <input placeholder='eMail' />
                <input placeholder='Password' />
                <button >Send</button>
            </form>
            <div className='formResults'>

            </div>
        </div>
    )
}

export default Form;