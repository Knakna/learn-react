import React, {useState} from 'react';
import NewComponent from './newComponent/NewComponent';


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
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
        ]
    )

    const addStudent = () => {
        setStudents([...students, {id: 12, name: "Chris", age: 101}])
    }

    return (
        <>
             <NewComponent
                 students={students}
                 topCars={topCars}
             />
             <button onClick={addStudent}>add student</button>
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