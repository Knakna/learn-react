import React, {useState} from 'react';


// methode map

type NewComponentType = {
    students: Array<StudentType>
    // students: StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

function NewComponent(props: NewComponentType) {
    // debugger
    return (
        <ul>
            {props.students.map((objectFromStudentArray, index) => {
                debugger
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.id}</span>

                        <span>{objectFromStudentArray.name} </span>
                        <span>Возраст: {objectFromStudentArray.age}</span>



                    </li>
                )
            } )}

        </ul>
    );
}

export default NewComponent;


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