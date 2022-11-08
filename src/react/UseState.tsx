import React, {useState} from 'react';


export function UseState() {
    // let a = 1;

    let [a, setA] = useState(1);

    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }

    const onClickHandler0 = () => {
        setA(a=0);
        console.log(a)
    }


    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler0}>0</button>
        </div>
    );
}

