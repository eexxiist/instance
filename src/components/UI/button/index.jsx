import React from "react";

const ButtonComp = ({bg_color = 'blue', txt_color = 'white', text, type = 'submit', width='200px'}) => {
    const button_style = {
        alignItem: 'center',
        padding: '8px 0px',
        width: width,
        fontSize: '16px',
        lineHeight: '20px',
        color: txt_color,
        backgroundColor: bg_color,
    }
    return(
        <div>
            <button style={button_style} type={type}>{text}</button>
        </div>
    )
}

export default ButtonComp;