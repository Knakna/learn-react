import React from 'react';


type UniversalButtonType = {
    name: string
    callBack: () => void
}

export function UniversalButton(props: UniversalButtonType) {

    const onClickHandler = () => {
        // console.log('aaa')
        props.callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    );
}


