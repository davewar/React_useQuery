import React from 'react'
import { Link } from 'react-router-dom';


const Person = (person) => {
            //  console.log(person);

    return (
        <div className="card">
            <h3>{person.person.name}</h3>
            <p>Gender - {person.person.gender}</p>
            <p>Birth year - {person.person.birth_year}</p>
            <Link style={{color:"red"}} to={`/person/${person.person.name}`}>Full profile</Link>
        </div>
    )
}

export default Person
