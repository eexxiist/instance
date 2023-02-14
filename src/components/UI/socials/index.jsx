import React from "react";

const SocialsComp = ({type='ggle'}) => {

    const socials = {
        ggle: 'Google',
        ynd: 'Yandex',
        sfr: 'Saferi'
    }

    return(
        <div>
            <p><span>{type}</span>: {socials[type]}</p>
        </div>
    )
}

export default SocialsComp;