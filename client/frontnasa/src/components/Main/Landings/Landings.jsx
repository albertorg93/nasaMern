import React,{ useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css';  
import "./Landings.css";
import L from "leaflet"

const Landings = () => {

  const { register, handleSubmit } = useForm();
  const [asteroid, setAsteroid] = useState("");

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


  const onSubmit = (data,e) => {
    console.log(data,"esto es data")
    // createPoke(data);
    // setPage(true);
    console.log(e.target.valor.value,"esto es el input");
    e.targe.valor.value='';
  }
  console.log(asteroid)
  if(asteroid){return (
    <div>

            <form onSubmit={handleSubmit(onSubmit)} className="searchLanding">  
              <label>Choose asteroid to find:</label>
              <input name="valor" className='valor'  {...register("valor")}/>
              <select id="option" name="option" form="option" required {...register("option")}>
                  <option value="class">Class</option>
                  <option value="mass">Mass</option>
               </select>
                  <input type="submit" value="Send"/>
             </form>

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
              </Marker>) : null )}
          </MapContainer>
    </div>
    )} else {
      console.log("no entra aqui");
    }
  
 
};

export default Landings;
