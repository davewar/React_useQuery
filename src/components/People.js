import React from 'react'
import Person from './Person'

import { useQuery }from 'react-query'

 const fetchPeople = async () =>{

                const res = await fetch("https://swapi.dev/api/people/")

                return res.json()

    }

const People = () => {

   

    const { data,  status} = useQuery('people',fetchPeople)
        // console.log(data);

    return (
        <div>
           <h2>People</h2>
           {
               status==="loading" && (
                   <div>Loading data...</div>
               )
            }
           
           
           
            {
               status==="error" && (
                   <div>Error with data</div>
               )
            }

           {
               status==="success" && (
                   <div>
                       {
                         data.results.map(item=>{

                         return <Person key={item.name} person={item}/>

                                            
                         })
                    }
                </div>
               )
            }
           
        </div>
    )
}

export default People
