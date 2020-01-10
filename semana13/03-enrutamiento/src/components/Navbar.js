import React from "react";
import { NavLink, withRouter} from "react-router-dom";
const Navbar = (props) => {
  let location = props.location.pathname;
                   
  return (
    location !== "/notfound" ?                  
    (<header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink className="nav-link" activeClassName="active"  to="/">Home</NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link" activeClassName="active"  to="/inicio">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact activeClassName="active" to="/nosotros">Nosotros</NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>) : null
  )
};

export default withRouter(Navbar);
