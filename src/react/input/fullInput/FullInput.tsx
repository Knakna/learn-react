import React, {ChangeEvent, ChangeEventHandler, MouseEventHandler, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title: string) => void
}

function FullInput(props: FullInputPropsType) {

    let [title, setTitle] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }


    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>

    );
}

export default FullInput;

