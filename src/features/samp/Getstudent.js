import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getStudentsAsync, selectStudents } from './sampSlice';


const Getstudent = () => {
    const dispatch = useDispatch()
    const [name, setname] = useState("")
    const students = useSelector(selectStudents);

    return (
        <div>
            get student by name:
            <br></br>
            <input onChange={(e) => setname(e.target.value)}></input>
           
            {students.filter(student => student.name === name).map((student) => <div key={student.id}>
                name: {student.name} ,
                desc: {student.description}
            </div>)}



        </div>
    )
}

export default Getstudent