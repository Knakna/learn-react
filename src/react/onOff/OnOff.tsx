import React from 'react';
import s from './OnOff.module.css'


type OnOffType = {
    on: boolean
}

function OnOff(props: OnOffType) {

    return (
        <div className={s.onOff}>
            <div className={`${s.two} ${props.on ? s.on : ''}`}>on</div>
            <div className={`${s.two} ${!props.on ? s.off : ''}`}>off</div>
           <button className={`${s.light} ${props.on ? s.on : s.off}`}>lightbulb</button>
        </div>

    );
}

export default OnOff;

