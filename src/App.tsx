import React, {useState} from 'react';
import NewComponent from './newComponent/NewComponent';
import {ToDoList} from './ToDoList';
import Accordion from './react/accordion/Accordion';
import Title from './react/title/Title';
import {Rating} from './react/rating/Rating';
import OnOff from './react/onOff/OnOff';
import {Counter} from './react/Counter';
import {Button} from './react/Button';
import {UniversalButton} from './react/UniversalButton';
import {UseState} from './react/UseState';
import {Filter} from './react/Filter';


export type TopCarType = {
    manufacturer: string,
    model: string
}


const topCars: TopCarType[] = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]


function App() {
    const [students, setStudents] = useState([
            {id: 1, name: 'James', age: 8},
            {id: 2, name: 'Robert', age: 18},
            {id: 3, name: 'John', age: 28},
            {id: 4, name: 'Michael', age: 38},
            {id: 5, name: 'William', age: 48},
            {id: 6, name: 'David', age: 58},
            {id: 7, name: 'Richard', age: 68},
            {id: 8, name: 'Joseph', age: 78},
            {id: 9, name: 'Thomas', age: 88},
            {id: 10, name: 'Charles', age: 98},
            {id: 11, name: 'Christopher', age: 100},
        ]
    )

    const addStudent = () => {
        setStudents([...students, {id: 12, name: 'Chris', age: 101}])
    }



    const Button1Foo = (sub: string, age: number, adress: string) => {
        console.log(sub, age, adress)
    }

    const Button2Foo = (sub: string) => {
        console.log(sub)
    }

    const Button3Foo = () => {
        console.log('zero')
    }



    return (
        <>

            <Filter/>
            <UseState/>

            <UniversalButton name={'1'} callBack={() => Button1Foo('Vasia', 21, 'Minsk')}/>
            {/*<UniversalButton name ={'2'} callBack={Button2Foo}/>*/}
            <UniversalButton name={'2'} callBack={() => Button2Foo('Olia')}/>
            <UniversalButton name={'zero'} callBack={Button3Foo}/>

            <Button/>
            <Counter/>
            <Counter/>

            <ToDoList title={'hello'} tasks={[
                {
                    id: 22,
                    title: 'string',
                    isDone: true
                }]}/>
            <NewComponent
                students={students}
                topCars={topCars}
            />
            <button onClick={addStudent}>add student</button>
            <Title value={'Title1'}/>
            <Title value={'Title2'}/>
            <Title/>
            <Rating value={0}/>
            <Accordion title={'menu'} number={23} collapsed={false}/>
            <Accordion title={'users'} number={55} collapsed={true}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={0}/>
            <OnOff on={true}/>
            <OnOff on={false}/>

        </>


    );
}

export default App;


// tests

// import React from 'react';
// import './App.css';
// import {ToDoList} from "./ToDoList";
//
// function App() {
//
//   const tasks1 = [
//         {id: 1, title: "html", isDone: true},
//         {id: 2, title: "js", isDone: true},
//         {id: 3, title: "react", isDone: false},
//     ]
//
//     const tasks2 = [
//         {id: 1, title: "hello", isDone: false},
//         {id: 2, title: "world", isDone: false},
//         {id: 3, title: "yo", isDone: false},
//     ]
//
//
//
//     return (
//         <div className="App">
//             <ToDoList title="text" tasks={tasks1}/>
//             <ToDoList title="text2" tasks={tasks2}/>
//
//         </div>
//     );
// }
//
//     export default App;