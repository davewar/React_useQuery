import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (obj) => {
 
  // console.log("obj",obj);
  // console.log("obj1",obj.queryKey[1]);
  const item = obj.queryKey[1]
  //   const res = await fetch('https://swapi.dev/api/planets/');
  const res = await fetch(`http://swapi.dev/api/planets/?page=${item}`);

        const data= await res.json()

  return data;
}

const Planets = () => {
  const [ page, setPage ] = useState(1)
   const { data, status } = useQuery(['planets',page], fetchPlanets);

  return (
    <div>
      <h2>Planets</h2>

      <button onClick={() => setPage(1)}>page 1</button>
      <button onClick={() => setPage(2)}>page 2</button>
      <button onClick={() => setPage(3)}>page 3</button>

      {status === 'loading' && (
        <div>Loading data</div>
      )}

      {status === 'error' && (
        <div>Error fetching data</div>
      )}

      {status === 'success' && (
        <div>
          { data.results.map(planet => <Planet key={planet.name} planet={planet} /> ) }
        </div>
      )} 
    </div>
  );
}
 
export default Planets;