import React, {useState} from 'react';
import TitleAccordion from './titleAccordion/TitleAccordion';
import BodyAccordion from './bodyAccordion/BodyAccordion';


type AccordionPropsType = {
    title: string
    number: number
}

function UncontrolledAccordion(props: AccordionPropsType) {

    const style = {
        margin: '25px 0 35px 0',
    };

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div style={style}>
            <TitleAccordion title={props.title}/>
            <button onClick={() => {
                setCollapsed(!collapsed)
            }}>toggle
            </button>
            {!collapsed && <BodyAccordion number={props.number}/>}
        </div>
    );

}


export default UncontrolledAccordion;

