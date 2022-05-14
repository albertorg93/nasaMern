import React,{ useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css';  
import "./Landings.css";
import L from "leaflet"
import { Link } from "react-router-dom";

const Landings = () => {

  const { register, handleSubmit } = useForm();
  const [asteroid, setAsteroid] = useState("");
  const [valor, setValor] = useState([]);
  const [option, setOption] = useState([]);

  const Icon = new L.Icon({
    iconUrl: require('../../../assets/asteroid.png'),
    popupAnchor: [0, -10],
    iconSize: new L.Point(60, 60)
  });


  useEffect(() => {
   const fetchData = async () => {
       const res = await axios.get('http://localhost:5000/api/astronomy/landings/all')
       const data = await res.data.slice(0,50)
       setAsteroid(data)
       
   }
  fetchData()
  }, [])

  useEffect(() => {
    if(option==="class")
    {
      const fetchData = async () => {
        const res = await axios.get(`http://localhost:5000/api/astronomy/landings/class/${valor}`)
        const data = await res.data.slice(0,50)
        setAsteroid(data)
        
    }
   fetchData()
    } else if(option==="mass"){
      const fetchData = async () => {
        const res = await axios.get(`http://localhost:5000/api/astronomy/landings/mass/${valor}`)
        const data = await res.data.slice(0,50)
        setAsteroid(data)
        
    }
   fetchData()
    }
  
   }, [valor])





  const onSubmit = (data,e) => {
    const {valor, option} = data;
    setOption(option)
    setValor(valor)
    e.target.valor.value='';
  }
  
  if(asteroid){return (
    <div>
           <div className="formandlist">
            <form onSubmit={handleSubmit(onSubmit)} className="searchLanding">  
              <label>Search an asteroid by his properties</label>
              <input name="valor" className='valor'  {...register("valor")}/>
              <select id="option" name="option" form="option" required {...register("option")}>
                  <option value="class">Class</option>
                  <option value="mass">Mass</option>
               </select>
                  <input type="submit" value="Send"/>
             </form>
             <Link to="/landlist" className="alllist">View all landings</Link>
             </div>
               
     <MapContainer
              center={["40.4689", "-3.7786"]}
              zoom={3}
              style={{ height: '80vh' }}>
              <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              />
              {asteroid.map((data, i) =>
                data.geolocation ? (
              <Marker
                key={i}
                position={[data.geolocation[0].latitude, data.geolocation[0].longitude]}
                icon={Icon}
              >
                <Popup>
                 <ul className="tarjeta">
                   <li>Name: {data.name}</li>
                   <li>Id: {data.id}</li>
                   <li>Mass: {data.mass}</li>
                   <li>Class: {data.recclass}</li>
                   <li>Landing Year: {data.year.slice(0,4)}</li>
                   {/* <li>{data.name}</li> */}

                 </ul>
              </Popup>
              </Marker>) : null )}
          </MapContainer>

         
    </div>
    )} else {
      console.log("no entra aqui");
    }
  
 
};

export default Landings;
