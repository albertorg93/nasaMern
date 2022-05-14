import React from "react";
// import axios from 'axios';

const Cardnea = (props) => {
  const info = props.data

  const removeLanding = () =>  {
    console.log(info)
    // let valor = info
   // axios.delete('http://localhost:5000/api/astronomy/neas/delete', info);
    // axios.delete('http://localhost:5000/api/astronomy/neas/delete',{ data: info})

  }

  return      <div className="neastarjeta">
                 <ul>
                 <li>Designation: {info.designation}</li>
                   <li>Discovery date: {info.discovery_date.slice(0,10)}</li>
                   <li>Orbit class: {info.orbit_class}</li>
                   <li>Period year: {info.period_yr}</li>
                 </ul>
                 <button onClick={removeLanding}>Borrar</button>
                 </div>;
              
};

export default Cardnea;
