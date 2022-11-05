import React from 'react';
import TitleAccordion from './titleAccordion/TitleAccordion';
import BodyAccordion from './bodyAccordion/BodyAccordion';


type AccordionPropsType = {
    title: string
    number: number
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <TitleAccordion title={props.title}/>
            {/*{true && <BodyAccordion number={props.number}/>}*/}
            {!props.collapsed && <BodyAccordion number={props.number}/>}
        </div>
    );

}

// function Accordion(props: AccordionPropsType) {
//     if (props.collapsed === true) {
//         return (
//             <div>
//                 <TitleAccordion title={props.title}/>
//             </div>
//         );
//     } else {
//         return (
//             <div>
//                 <TitleAccordion title={props.title}/>
//                 <BodyAccordion number={props.number}/>
//             </div>
//         );
//     }
// }

export default Accordion;

