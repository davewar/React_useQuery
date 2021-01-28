import React from 'react'

import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

const fetchPlanetByName = async (obj) => {   
    // console.log(obj);

  //  const res = await fetch(`https://swapi.dev/api/planets/?search=Tatooine`);
   const res = await fetch(`https://swapi.dev/api/planets/?search=${obj.queryKey[1]}`);

        const data= await res.json()

  return data;
}

const PlanetId = () => {

        const { id } = useParams();
            //  console.log(useParams());
            //  console.log(id);
             
              const { data, status } = useQuery(['planetName',id], fetchPlanetByName);
              // console.log(data);

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
              <p>Population - {data.results[0].population}</p>
              <p>Terrain - {data.results[0].terrain}</p>
              <p>Climate - {data.results[0].climate}</p>
              <p>Diameter - {data.results[0].diameter}</p>
              <p>Gravity - {data.results[0].gravity}</p>
              <Link style={{color:"red"}} to='/' className='btn'>Back To People</Link>
          </>
          }
        </div>
      )} 
           
           

        </div>
    )
}


export default PlanetId
