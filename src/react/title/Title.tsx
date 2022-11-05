import React from 'react';

type TitleType = {
    value?: string
}

function Title({value='ddd'}: TitleType) {

    return (
        <div>
           <h2>{value}</h2>
        </div>

    );
}

export default Title;

