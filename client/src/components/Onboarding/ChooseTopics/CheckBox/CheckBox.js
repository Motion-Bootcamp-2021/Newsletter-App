import React, { useState } from 'react';
import './CheckBox.scss';

const CheckBox = ({id, name, sendNameToParent}) => {
    const [isChecked, setState] = useState(false);
    const onChange = () => {
        setState(!isChecked);
        sendNameToParent(name);
    }

    return (
        <div className="choose-topic-check-box">
            <input type="checkbox" id={id} name={name} checked={isChecked} onChange={onChange} />
            <label htmlFor={id}>{name} {isChecked?<div className="line"/>: null}</label>
        </div>
    )
}

export default CheckBox;