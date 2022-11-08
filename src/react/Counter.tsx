import React, {useState} from 'react';


export function Counter() {
    // debugger
    console.log('counter rendering');
    let arr = useState(5);
    let data = arr[0];
    let setData = arr[1];

    return (
        <div onClick={() => {
            setData(data + 1)
        }}>
            {data}
        </div>
    );
}

