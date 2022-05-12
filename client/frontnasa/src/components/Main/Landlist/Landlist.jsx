import React,{ useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css';  
import "./Landlist.css";
import L from "leaflet"
import Card from './Cardland'

const Landlist = () => {

  const { register, handleSubmit } = useForm();
  const [listLandings, setlistLandings] = useState("");
  // const [valor, setValor] = useState([]);
  // const [option, setOption] = useState([]);


  useEffect(() => {
   const fetchData = async () => {
       const res = await axios.get('http://localhost:5000/api/astronomy/landings/all')
       const data = await res.data.slice(0,50)
       setlistLandings(data)
       
   }
  fetchData()
  }, [])
  
  if(listLandings){return (
    <div>
          {listLandings.map((datos, i) =>
                datos.geolocation ? (
                   <Card data={datos} key={i}/>
           ) : null )}
    </div>
    )} else {
      console.log("no entra aqui");
    }
  
 
};

export default Landlist;
