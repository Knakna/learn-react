import React from 'react';

type StarType = {
    selected: boolean

}

function Star(props: StarType) {

    const styleStar = {
        width: '26px',
        display: 'inline-block'
    }

    if (props.selected === true) {
        return (
            <span style={styleStar}> <b>star</b> </span>
        )
    } else {
        return (
            <span style={styleStar}>star </span>
        );
    }
}

export default Star;

