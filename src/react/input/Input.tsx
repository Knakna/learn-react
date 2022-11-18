import React, {useState} from 'react';
import FullInput from './fullInput/FullInput';
import SelfInput from './selfInput/SelfInput';
import SelfButton from './selfButton/SelfButton';


function Input() {

    const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
    ])

    let [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message])
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }
    // console.log(message)
    // console.log(title)


    return (
        <div className="Input">
            <SelfInput setTitle={setTitle} title={title}/>
            <SelfButton name={'+'} callBack={callBackButtonHandler}/>

            <FullInput addMessage={addMessage}/>

            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );

}


export default Input;

