import React, {useState} from 'react';
import Star from '../../star/Star';


export function UncontrolledRating() {

    const buttonStyle = {
        marginRight: "20px"
    }

    const [value, setValue] = useState<0|1|2|3|4|5>(0)

    return (
        <div>
            <Star selected={value >0 }/> <button style={buttonStyle} onClick={ () => {setValue(1)}}>1</button>
            <Star selected={value >1 }/> <button style={buttonStyle} onClick={ () => {setValue(2)}}>2</button>
            <Star selected={value >2 }/> <button style={buttonStyle} onClick={ () => {setValue(3)}}>3</button>
            <Star selected={value >3 }/> <button style={buttonStyle} onClick={ () => {setValue(4)}}>4</button>
            <Star selected={value >4 }/> <button style={buttonStyle} onClick={ () => {setValue(5)}}>5</button>
        </div>
    );
}


