import React from "react";

const Consulta = (props) => {
  console.log(props);
  let {match: {params: {texto}}} = props                  
  return (
    <div className="container">
       Buscaste : {texto}                 
    </div>
  );
};

export default Consulta;
