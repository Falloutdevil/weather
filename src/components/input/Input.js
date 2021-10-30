import React, {useState, useRef} from "react";
import './../../App.css';


export const Input = ({setCitiesList}) => {
    const [inputValue, setInputValue] = useState('');
    const [someValue, setSomeValue] = useState('')
    const inputRef = useRef(null);

    const handleOnClick = () => {
        setCitiesList((currentArray) => [...currentArray, inputValue]);
        setInputValue('');
        inputRef.current.focus();
    }
    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }
    const onSomeClick = () => {
      setSomeValue((someValue) => someValue + 1);
    }


    return (
        <div className="InputWrap">
            <input className="Input" onClick={onSomeClick} onChange={handleOnChange} value={inputValue} ref={inputRef}/>
            <button className="Button" onClick={handleOnClick}>+</button>
        </div>
    )
}