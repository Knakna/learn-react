import React from 'react';


type SelfButtonType = {
    name: string
    callBack: () => void
}

function SelfButton(props: SelfButtonType) {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>
            {props.name}
        </button>

    );
}

export default SelfButton;

