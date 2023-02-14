import React, {useState} from "react";

const InputComp = ({id, type = 'text', label_text, required = false}) => {
    
    const [input, setInput] = useState('Hello');

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return(
        <div>
            <label htmlFor={id}>{label_text}</label>
            <input type={type} id={id} required={required} onChange={handleChange} value={input}/>
        </div>
    )
}

export default InputComp;