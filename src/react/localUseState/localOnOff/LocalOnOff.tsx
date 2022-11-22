import React, {useState} from 'react';




function LocalOnOff() {

    const [on, setOn] =  useState(false);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '3px',
        backgroundColor: on ? 'lightgreen' : 'white',
        cursor: 'pointer'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '3px',
        backgroundColor: on ? 'white' : 'tomato',
        cursor: 'pointer'
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'lightgreen' : 'tomato'
    };

    return (
        <div>
            <div style={onStyle} onClick={
                () => {
                    setOn(true);
                }}>On
            </div>
            <div style={offStyle} onClick={() => {
                setOn(false);
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export default LocalOnOff;

