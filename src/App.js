import  {useState} from 'react'
import Navbar from './components/Navbar'
import People from './components/People'
import Planets from './components/Planets'
import PlanetId from './components/PlanetId'

import  PersonId from './components/PersonId'
import Error from './components/Error'


// import {ReactQueryDevtools} from 'react-query/devtools';

import { Route, Switch } from 'react-router-dom';

function App() {

      const [page, setPage] = useState('planets')


  return (
    <>

        
          <Switch> 
              <Route path="/" exact>
                  <div className="App">
                    <h3>Star wars info</h3>
                    <Navbar setPage={setPage}/>
                      <div className="content">
                      
                      {page==="planets" ? <Planets/> : <People/>}

                      </div>

                   </div>
              </Route>
              <Route path='/person/:id' children={<PersonId />} />
              <Route path='/planet/:id' children={<PlanetId />} />      
              <Route path='*'><Error /></Route>
        

         </Switch>
    </>
  );
}

export default App;

