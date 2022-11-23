import React from 'react';

type TitleAccordionType = {
    title: string
}

function TitleAccordion(props:TitleAccordionType) {

    return (
        <div>
           <h2>{props.title}</h2>
        </div>

    );
}

export default TitleAccordion;

