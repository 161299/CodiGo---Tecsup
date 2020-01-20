import React from "react";

const Header = props => {
  let {_pMarca} = props;
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        {_pMarca}
      </a>
    </nav>
  );
};

export default Header;
