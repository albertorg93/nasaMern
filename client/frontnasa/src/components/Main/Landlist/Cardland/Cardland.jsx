import React from "react";
// import axios from 'axios';

const Cardland = (props) => {
  const info = props.data

  const removeLanding = () =>  {
    console.log(info)
    // let valor = info
   // axios.delete('http://localhost:5000/api/astronomy/landings/delete', info);
    // axios.delete('http://localhost:5000/api/astronomy/landings/delete',{ data: info})

  }

  return      <div className="landstarjeta">
                 <ul>
                   <li>Name: {info.name}</li>
                   <li>Id: {info.id}</li>
                   <li>Mass: {info.mass}</li>
                   <li>Class: {info.recclass}</li>
                   {/* <li>Landing Year: {info.year.slice(0,4)}</li> */}
                 </ul>
                 <button onClick={removeLanding}>Borrar</button>
                 </div>;
              
};

export default Cardland;
