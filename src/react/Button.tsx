import React from 'react';
// import React, {MouseEvent} from 'react';


export function Button() {

    /*    const myFirstButton = (event: MouseEvent<HTMLButtonElement>) => {
            console.log('bye')
        }
        const mySecondButton = (event: MouseEvent<HTMLButtonElement>) => {
            console.log('hello')
        }*/
/*    const onclickHandler = (name: string) => {
        console.log(name)
    }*/

    const foo1 = () => {
        console.log(100200)
    }

    const foo2 = (num:number) => {
        console.log(num)
    }

    return (
        <div>
            {/* <button onClick={(event) => {
                console.log("hello")}}>1</button>*/}
      {/*      <button onClick={(event: MouseEvent<HTMLButtonElement>) => onclickHandler('V')}>2</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onclickHandler('Q')}>1</button>
            <button onClick={() => {onclickHandler("some info")}}>3</button>*/}

            <button onClick={foo1}>1</button>
            <button onClick={() => {foo2 (100200)}}>2</button>
            {/*<button onClick={(event: MouseEvent<HTMLButtonElement>) => onclickHandler('Q')}>1</button>*/}

        </div>
    );


}


