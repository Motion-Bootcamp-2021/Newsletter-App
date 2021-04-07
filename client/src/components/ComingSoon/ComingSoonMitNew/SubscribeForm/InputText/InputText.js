import './InputText.scss'

const InputText = ( {id, label, placeholder} ) => {
    return (
        <div className="input-text">
            <input type="text" className="input-text-field" id={id} name={id} placeholder={placeholder} />
            <label htmlFor={id} className="input-text-label">{label}</label>
        </div>
    )
}

export default InputText;