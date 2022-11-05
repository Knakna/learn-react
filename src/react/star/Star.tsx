import React from 'react';

type StarType = {
    selected: boolean

}

function Star(props: StarType) {
    if (props.selected === true) {
        return (
            <span> <b>star</b> </span>
        )
    } else {
        return (
            <span>star </span>
        );
    }
}

export default Star;

