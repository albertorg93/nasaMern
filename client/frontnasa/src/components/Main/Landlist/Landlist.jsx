import React,{ useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css';  
import "./Landlist.css";
import L from "leaflet"

const Landlist = () => {

  const { register, handleSubmit } = useForm();
  const [listLandings, setlistLandings] = useState("");
  const [valor, setValor] = useState([]);
  const [option, setOption] = useState([]);


  useEffect(() => {
   const fetchData = async () => {
       const res = await axios.get('http://localhost:5000/api/astronomy/landings/all')
       const data = await res.data.slice(0,50)
       setlistLandings(data)
       
   }
  fetchData()
  }, [])


  console.log(listLandings)

  
  if(listLandings){return (
    <div>
          {listLandings.map((data, i) =>
                data.geolocation ? (
                  
                <div className="landstarjeta">
                 <ul>
                   <li>Name: {data.name}</li>
                   <li>Id: {data.id}</li>
                   <li>Mass: {data.mass}</li>
                   <li>Class: {data.recclass}</li>
                   <li>Landing Year: {data.year.slice(0,4)}</li>
                 </ul>
                 </div>
                
           ) : null )}
    </div>
    )} else {
      console.log("no entra aqui");
    }
  
 
};

export default Landlist;
