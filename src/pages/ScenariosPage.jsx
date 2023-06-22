import { Outlet, useLoaderData, Link } from 'react-router-dom'
import { getScenarios } from '../services/scenarios'

export async function loader(){
  const data = await getScenarios()
  return {data}
}

const ScenariosPage = () => {

  const {data} = useLoaderData()

  return (
    <div>
      {/* <h2>Scenario's</h2> */}
        {/* choice of 6 scenes, represented by 6 buttons */}
        <div className="row">
          <p>Kies hier je gewenste interactieve leerpad</p>
          {data.scenarios.map(e =>
            <div className="col-2 me-2" key={`button${e.id}`}>
              <Link to={`/scenarios/${e.id}`}>
              
              <button 
                className={`btn ${e.finished ? "btn-success" : "btn-primary"}`}>
                {e.title}
              </button>
              
              </Link>
            </div>
            
          )}
        </div>
        <br></br>
        <hr></hr>
         {/* the current scene */}
        <Outlet />
          
    </div>
  )
}

export default ScenariosPage