import './Input.scss';

const Input = ({type="text", label, error, errorMessage, id, value, onBlur, onChange}) => {
    return (
        <div className="inputField">
            <label htmlFor={id}>
                {error ? (<div className="error">{errorMessage}</div>):null}
                <input type={type} id={id} name= {id} value={value} placeholder={label} onBlur={onBlur} onChange={onChange} />
            </label>
        </div>
    ) 
}

export default Input;