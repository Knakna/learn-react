import React from 'react';
import {TopCarType} from '../App';


// methode map

type NewComponentType = {
    students: Array<StudentType>
    // students: StudentType[]

    // topCars: TopCarType[]
    topCars: Array<TopCarType>
}

type StudentType = {
    id: number,
    name: string,
    age: number
}
//
// type TopCarsType = {
//     cars: Array<TopCarType>
// }

type StreetType = {
    area: string
    name: string
}

type AdressType = {
    city: string
    country: string
    street: StreetType

}
type TechArray = {
    index: number
    html: boolean

}

type SchoolType = {
    id: number
    name: string
    isActive: boolean
    fruits: Array<string>
    adress: AdressType
    tech: Array<TechArray>
}


const school: SchoolType = {

    id: 1,
    name: 'sport',
    isActive: true,
    fruits: ['Банан', 'Апельсин', 'Яблоко', 'Манго'],
    adress: {
        city: 'Minsk',
        country: 'RB',
        street: {
            area: 'Pervomajski',
            name: 'Gintovta'
        }
    },
    tech: [
        {
            index: 1,
            html: true
        },
        {
            index: 2,
            html: false
        }
    ]

}

function NewComponent({students, topCars}: NewComponentType) {
    // debugger
    console.log('gggg')
    console.log(school.fruits[2])
    console.log(school.fruits.length)
    console.log(school.adress.street.area)
    console.log(school.tech.length)


    return (
        <>
            <ul>
                {students.map((student: StudentType, index) => {
                    return (
                        <li key={index + 1}>
                            <span>{student.id}</span>
                            <span>{student.name} </span>
                            <span>Возраст: {student.age}</span>
                        </li>
                    )
                })}
            </ul>

            <table>
                <thead>
                <tr>
                    <th>
                        Марка
                    </th>
                    <th>
                        Модель
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    topCars.map((car, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {car.manufacturer}
                                </td>
                                <td>
                                    {car.model}
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>

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


