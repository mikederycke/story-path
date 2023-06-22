import { NavLink, Link } from 'react-router-dom'

const Sidebar = () => {

  
  return (
    <div className="border-end bg-white" id="sidebar-wrapper">
         <Link to={"/"} style={{textDecoration: "none", color: "black"}}>
            <div className="sidebar-heading border-bottom bg-light">Interactieve leerpaden</div>
         </Link>
        <div className="list-group list-group-flush">
        
          <NavLink to={"/doelstellingen"}
           className="list-group-item list-group-item-action list-group-item-bold p-3" key={"doelstellingen"}>    
            Doelstellingen 
          </NavLink>
  
          <NavLink to={"/theorie"} className="list-group-item list-group-item-action list-group-item-bold p-3" key={"theorie"}>
            Theorie</NavLink>

          <NavLink to={"/scenarios"} className="list-group-item list-group-item-action list-group-item-bold p-3" key={"scenarios"}>
            Scenario's
          </NavLink>
       
           
        </div>
    </div>
  )
}

export default Sidebar