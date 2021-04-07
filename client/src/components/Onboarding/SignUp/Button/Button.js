import './Button.scss';

const Button = ({text, id, onClick}) => <button type="button" id={id} onClick={onClick}>{text}</button>

export default Button;