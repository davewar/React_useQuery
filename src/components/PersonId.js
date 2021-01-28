import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

const fetchPersonByName = async (obj) => {
   
    // console.log(obj);

  //  const res = await fetch(`https://swapi.dev/api/people/?search=C-3PO`);
   const res = await fetch(`https://swapi.dev/api/people/?search=${obj.queryKey[1]}`);

        const data= await res.json()

  return data;
}

const PersonID = () => {
             const { id } = useParams();
            //  console.log(useParams());
            //  console.log(id);
             
              const { data, status } = useQuery(['person',id], fetchPersonByName);
                //   console.log(status);           
            // console.log("DATA", data);
         
    return (
        <div className="card">

          {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <div>
          { 
          <>
              <h1>{data.results[0].name}</h1>
              <p>Gender - {data.results[0].gender}</p>
            <p>Birth year - {data.results[0].birth_year}</p>
              <p>Height - {data.results[0].height}</p>
              <p>Mass - {data.results[0].mass}</p>
              <p>Hair Colour - {data.results[0].hair_color}</p>
              <p>Skin Color - {data.results[0].skin_color}</p>
              <Link style={{color:"red"}} to='/' className='btn'>Back To People</Link>
          </>
          }
        </div>
      )} 
           
           

        </div>
    )
}

export default PersonID
