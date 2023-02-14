import React, {useState} from "react";

const CheckBox = ({id, width = '20px', height = '20px', type='checkbox', labelText}) =>{

    const checkBox_style = {
        marginTop: '30px',
        alignItem: 'center',
        width: width,
        height: height,
        color: 'orange',
        cursor: 'pointer'
    }

    const [checked, setCheked] = useState(true);

    function changeCheckBox(){
        setCheked(!checked);
    }

    return(
        <div>
            <input type={type} id={id} style={checkBox_style} checked={checked} onChange={changeCheckBox}/>
            <label htmlFor={id} style={checkBox_style}>{labelText}</label>
        </div>
    )
}

export default CheckBox;