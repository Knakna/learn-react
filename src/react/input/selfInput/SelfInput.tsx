import React, {ChangeEvent} from 'react';


type SelfInputPropsType = {
    setTitle: (title: string) => void
    title: string
}

function SelfInput(props: SelfInputPropsType) {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return (
        <>
            <input value={props.title} onChange={onChangeInputHandler}/>
        </>

    );
}

export default SelfInput;

