import React from "react";

const TextArea = ({name='textarea', id='textarea', maxWidth='300px', maxHeight='50vh'}) =>{

    const TextArea_style ={
        marginLeft: '300px',
        maxWidth: maxWidth,
        maxHeight: maxHeight
    }

    return(
        <div>
            <textarea name={name} id={id} cols="30" rows="10" style={TextArea_style}></textarea>
        </div>
    )

}

export default TextArea;