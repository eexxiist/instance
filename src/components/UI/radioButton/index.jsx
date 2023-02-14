import React, {useState} from "react";

const RadioButton = ({name='radio', type='radio'}) =>{

    const [value, setValue] = useState(1);

    // const obj = {
    //     name_obj: 'Name',
    //     age: 12
    // }

    // const {name_obj, age} = obj;

    // console.log(name_obj)
    // console.log(age)

    // const arr = ['Примерская', 'Морская'];

    // const [street_1, street_2] = arr;
    // console.log(street_1)
    // console.log(street_2)

    function changeValue(event){
        setValue(event.target.value);
    }

    return(
        <div>
            <input type={type} name={name} value="1"
            checked={value === '1' ? true : false}
            onChange={changeValue} />

            <input type={type} name={name} value="2"
            checked={value === '2' ? true : false}
            onChange={changeValue} />

            <input type={type} name={name} value="3"
            checked={value === '3' ? true : false}
            onChange={changeValue} />
        </div>


    )
}

export default RadioButton;