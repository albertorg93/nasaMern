import React,{ useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css';  
import "./Neas.css";
import L from "leaflet"

const Neas = () => {

  const { register, handleSubmit } = useForm();
  const [neas, setNeas] = useState("");
  const [valor, setValor] = useState([]);
  const [option, setOption] = useState([]);

  const Icon = new L.Icon({
    iconUrl: require('../../../assets/asteroid.png'),
    popupAnchor: [0, -10],
    iconSize: new L.Point(60, 60)
  });


  useEffect(() => {
   const fetchData = async () => {
       const res = await axios.get('http://localhost:5000/api/astronomy/neas/all')
       const data = await res.data.slice(0,50)
       setNeas(data)
       
   }
  fetchData()
  }, [])


  console.log(neas)

  
  if(neas){return (
    <div>
          {neas.map((data, i) =>
                data.designation ? (
                <div className="neastarjeta">
                 <ul>
                   <li>Designation: {data.designation}</li>
                   <li>Discovery date: {data.discovery_date}</li>
                   <li>Orbit class: {data.orbit_class}</li>
                   <li>Period year: {data.period_yr}</li>
                 </ul>
                 </div>
           ) : null )}
    </div>
    )} else {
      console.log("no entra aqui");
    }
  
 
};

export default Neas;
