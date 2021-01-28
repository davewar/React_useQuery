import {Link} from 'react-router-dom'


const Planet = ({planet}) => {
    // console.log("DW",planet);
    const {name,population, terrain} = planet
    
    return (
         <>
        <div className="card">
            <h3>{name}</h3>
            <p>Population - {population}</p>
            <p>Terrain - {terrain}</p>
            <Link style={{color:"red"}}  to={`/planet/${name}`}>Info</Link>
        </div>
         
         
         
       </>
    )
}

export default Planet
